const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const overlay = document.querySelector("#overlay");
const overlayText = document.querySelector("#overlayText");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const successButton = document.querySelector("#successButton");
const failureButton = document.querySelector("#failureButton");
const touchControls = document.querySelector("#touchControls");

const W = canvas.width;
const H = canvas.height;
const HUD_TOP = 812;
const ROAD_TOP = 272;
const ROAD_BOTTOM = 610;
const LANE_H = 82;
const PLAYER_W = 30;
const PLAYER_H = 48;
const STEP_X = 42;
const STEP_Y = 42;
const targetY = 228;
const startY = 668;
const USE_VEHICLE_SPRITES = true;
const BUS_ZONE_X1 = 500;
const BUS_ZONE_X2 = 835;
const BUS_PATH_X1 = 540;
const BUS_PATH_X2 = 790;
const BUS_TURN_DURATION = 3.25;
const BUS_CRUISE_SPEED = 118;
const BUS_MIN_WAIT = 0.55;
const BUS_MAX_WAIT = 1.55;
const TRAFFIC_FOLLOW_GAP = 92;
const TRAFFIC_STOP_PADDING = 36;
const TITLE_ART_W = 1536;
const TITLE_ART_H = 1024;
const TITLE_HYDE_SOURCE_RECT = { x: 26, y: 772, w: 507, h: 210 };
const END_ART_W = 1536;
const END_ART_H = 1024;
const END_MAIN_MENU_SOURCE_RECT = { x: 1168, y: 918, w: 330, h: 82 };
const PEDESTRIAN_COUNT = 5;

const laneDefs = [
  { y: 308, dir: -1, speed: 98, color: "#6e8795", gap: 430 },
  { y: 390, dir: -1, speed: 122, color: "#17639d", gap: 450 },
  { y: 472, dir: 1, speed: 132, color: "#b4432e", gap: 430 },
  { y: 554, dir: 1, speed: 108, color: "#2f6b4f", gap: 455 },
];

const mayorLines = [
  {
    text: "We're looking into possible solutions.",
    expression: "interested",
  },
  {
    text: "We need to make sure we get it right the first time.",
    expression: "concerned",
  },
  {
    text: "Consensus needs to be our goal.",
    expression: "thoughtful",
  },
  {
    text: "We need to get more input.",
    expression: "concerned",
  },
  {
    text: "Let's see if we can get the MBTA and DCR on board.",
    expression: "thoughtful",
  },
  {
    text: "I do not feel comfortable with fewer lanes",
    expression: "concerned",
  },
  {
    text: "Slowing down traffic is not something we should be pushing for.",
    expression: "concerned",
  },
  {
    text: "I hear you.",
    expression: "interested",
  },
];

const pedestrianPalette = [
  ["#1f9f7d", "#df9a36"],
  ["#cc7330", "#ece0cb"],
  ["#2f6da3", "#d5d5d5"],
  ["#7d5a3c", "#f0bd78"],
  ["#d4ae2d", "#513019"],
  ["#236fb0", "#b4692d"],
  ["#cc9b20", "#e2ba7e"],
  ["#f0f0f0", "#805c3c"],
  ["#38a555", "#d89557"],
];

const spriteSheet = new Image();
spriteSheet.src = "assets/spritesheet.png";
const vehicleSheet = new Image();
vehicleSheet.src = "assets/vehicle-sheet.png";
const diverseSpriteSheet = new Image();
diverseSpriteSheet.src = "assets/diverse-street-sprites.png";
const mobilitySpriteSheet = new Image();
mobilitySpriteSheet.src = "assets/mobility-sprites.png";
const successPopupSheet = new Image();
successPopupSheet.src = "assets/success-popups.png";
const failurePopupSheet = new Image();
failurePopupSheet.src = "assets/failure-popups.png";
const titleScreen = new Image();
titleScreen.src = "assets/title-screen.jpeg";
const endScreen = new Image();
endScreen.src = "assets/end-screen.png";
const busTurnSheet = new Image();
busTurnSheet.src = "assets/bus-turn-sheet.png";
const mayorSheet = new Image();
mayorSheet.src = "assets/mayor-expressions.png";
const nickPortrait = new Image();
nickPortrait.src = "assets/nick-gove-portrait.png";
const referenceSprites = {
  topEnvironment: loadImage("assets/reference/top-environment-clean.png"),
  businessFronts: loadImage("assets/reference/business-fronts.png"),
  avenueSign: loadImage("assets/reference/avenue-sign.png"),
  mayorPortrait: loadImage("assets/reference/mayor-portrait.png"),
  stationRight: loadImage("assets/reference/station-right-replacement.png"),
  stationExit: loadImage("assets/reference/station-exit-mouth.png"),
};
const VEHICLE_SHEET_W = 887;
const VEHICLE_SHEET_H = 444;
const VEHICLE_COLS = 8;
const VEHICLE_ROWS = 2;
const SAFE_VEHICLE_INDICES = [0, 1, 7];
const DIVERSE_VEHICLE_CROPS = [
  [14, 96, 203, 114],
  [234, 101, 186, 108],
  [433, 96, 205, 114],
  [643, 92, 203, 119],
  [852, 94, 200, 116],
  [1056, 76, 193, 136],
  [1249, 52, 209, 158],
  [1462, 96, 203, 114],
  [5, 271, 210, 124],
  [212, 271, 208, 126],
  [426, 279, 210, 120],
  [629, 258, 207, 142],
  [822, 296, 211, 114],
  [1034, 272, 211, 126],
  [1252, 289, 203, 118],
  [1450, 238, 209, 158],
];
const DIVERSE_PED_CROPS = [
  [57, 450, 111, 184],
  [245, 450, 115, 184],
  [454, 450, 106, 184],
  [663, 450, 105, 184],
  [856, 450, 130, 190],
  [1073, 450, 112, 184],
  [1272, 450, 113, 184],
  [1475, 450, 125, 184],
  [42, 688, 128, 180],
  [243, 688, 117, 178],
  [434, 688, 133, 178],
  [647, 688, 121, 180],
  [869, 688, 112, 180],
  [1066, 688, 118, 180],
  [1273, 688, 202, 180],
  [1451, 688, 164, 180],
];
const MOBILITY_SPRITE_CROPS = {
  stroller: [
    [91, 47, 407, 403],
    [552, 58, 393, 392],
    [1035, 58, 398, 392],
  ],
  cyclist: [
    [62, 512, 419, 416],
    [512, 512, 512, 416],
    [1024, 512, 450, 416],
  ],
};
const MOBILITY_SPRITE_SIZES = {
  stroller: [
    [88, 58],
    [84, 56],
    [96, 58],
  ],
  cyclist: [
    [88, 64],
    [92, 64],
    [110, 64],
  ],
};
const MOBILITY_MAX_ACTORS = 4;
const MOBILITY_SPAWN_CLEARANCE = 210;
const MOBILITY_MIN_GAP = 142;
const MOBILITY_SPAWN_SEQUENCE = [
  { type: "stroller", variant: 0 },
  { type: "cyclist", variant: 0 },
  { type: "stroller", variant: 1 },
  { type: "cyclist", variant: 1 },
  { type: "stroller", variant: 2 },
  { type: "cyclist", variant: 2 },
];
const SUCCESS_MESSAGES = [
  { text: "You made it to the Orange Line.", image: 0 },
  { text: "You're on your way to work.", image: 1 },
  { text: "Your kid can get to their BPS school.", image: 2 },
  { text: "Can't believe you made it. 🙌", image: 3 },
];
const FAILURE_MESSAGES = [
  { text: "We needed more community engagement.", image: 0 },
  { text: "Maybe we'll get to it next term.", image: 1 },
  { text: "Please wait four years and try again.", image: 2 },
  { text: "Hold your kids tightly to keep them safe!", image: 3 },
  { text: "We still believe in safe streets.", image: 4 },
  { text: "This is a high-throughput corridor!", image: 5 },
];
const DIVERSE_VEHICLE_SIZES = [
  [104, 50],
  [98, 50],
  [112, 52],
  [116, 54],
  [126, 54],
  [128, 62],
  [150, 68],
  [112, 52],
  [116, 58],
  [116, 58],
  [112, 54],
  [138, 64],
  [106, 50],
  [130, 58],
  [104, 52],
  [150, 68],
];
const PEDESTRIAN_QUEUE = [0, 1, 2, 3, 4, 5, 6, 15, 7, 8, 9, 10, 11, 12, 13, 14];
const VEHICLE_CROPS = [
  [11, 112, 99, 55],
  [15, 113, 96, 54],
  [0, 115, 111, 53],
  [0, 116, 111, 52],
  [0, 123, 110, 45],
  [0, 128, 111, 40],
  [0, 121, 110, 47],
  [11, 130, 89, 38],
];
const BUS_TURN_SHEET_W = 887;
const BUS_TURN_SHEET_H = 444;
const BUS_TURN_COLS = 8;
const BUS_TURN_ROWS = 2;
const BUS_TURN_CROPS = [
  [
    [31, 69, 57, 107],
    [19, 69, 54, 107],
    [12, 76, 93, 101],
    [25, 87, 86, 94],
    [0, 98, 110, 82],
    [0, 106, 111, 74],
    [0, 118, 111, 66],
    [0, 120, 94, 60],
  ],
  [
    [31, 32, 57, 107],
    [19, 36, 59, 103],
    [8, 51, 99, 95],
    [19, 59, 92, 88],
    [0, 65, 110, 80],
    [0, 63, 111, 81],
    [0, 70, 111, 72],
    [0, 81, 92, 61],
  ],
];
const MAYOR_SHEET_W = 1016;
const MAYOR_SHEET_H = 387;
const MAYOR_CROPS = [
  [10, 35, 245, 304],
  [0, 35, 251, 304],
  [5, 35, 239, 304],
  [0, 35, 243, 304],
];
const SPRITE_CELL = 256;
const SPRITES = {
  pedestrian: {
    row: 0,
    crops: [
      [106, 73, 95, 178],
      [92, 74, 89, 178],
      [73, 70, 119, 181],
      [69, 76, 95, 176],
      [55, 72, 91, 180],
      [27, 75, 93, 180],
    ],
  },
  car: {
    row: 1,
    crops: [
      [17, 70, 214, 118],
      [49, 80, 190, 112],
      [2, 76, 238, 116],
      [18, 81, 210, 110],
      [8, 76, 232, 116],
      [12, 98, 196, 97],
    ],
  },
  stationSign: { col: 0, row: 2, crop: [0, 50, 256, 100] },
  busStop: { col: 1, row: 2, crop: [82, 22, 92, 208] },
  parking: { col: 2, row: 2, crop: [84, 24, 88, 204] },
  lamp: { col: 3, row: 2, crop: [88, 18, 80, 214] },
  planter: { col: 4, row: 2, crop: [32, 62, 190, 134] },
  pubSign: { col: 5, row: 2, crop: [8, 56, 240, 102] },
  burst: { col: 0, row: 3, crop: [28, 24, 200, 200] },
  alert: { col: 1, row: 3, crop: [70, 30, 118, 174] },
  mayorIcon: { col: 3, row: 3, crop: [74, 38, 112, 158] },
  tRoundel: { col: 5, row: 3, crop: [44, 30, 168, 168] },
};

let state;
let keys = new Set();
let lastTime = 0;
let moveCooldown = 0;

const chipAudio = {
  ctx: null,
  master: null,
  musicGain: null,
  sfxGain: null,
  musicTimer: null,
  midiLoopTimer: null,
  midiEvents: null,
  midiDuration: 0,
  activeMusicNodes: [],
  musicStep: 0,
  musicLead: 0,
  musicMode: "game",
  unlocked: false,
  melody: [
    ["D5", 2], ["B4", 1], ["G4", 1], ["G5", 2], ["F#5", 1], ["E5", 1],
    ["D5", 2], ["G5", 1], ["B4", 1], ["A4", 1], ["D5", 2], ["R", 2],
    ["D5", 1], ["D5", 1], ["D5", 1], ["D5", 1], ["B4", 1], ["A4", 1],
    ["G4", 1], ["R", 1], ["G5", 1], ["G5", 1], ["A5", 1], ["G5", 1],
    ["F#5", 1], ["E5", 1], ["D5", 1], ["B4", 1], ["R", 1], ["B4", 1],
    ["G5", 2], ["B4", 2], ["D5", 1], ["A4", 4], ["R", 2],
  ],
  bass: [
    ["G3", 4], ["E3", 4], ["G3", 4], ["F#3", 4],
    ["G3", 2], ["B3", 2], ["D3", 2], ["B3", 2],
    ["E3", 4], ["D3", 4], ["C3", 4], ["D3", 4],
  ],
  titleMelody: [
    ["E5", 1], ["G5", 1], ["B5", 2], ["B5", 1], ["A5", 1], ["G5", 1], ["E5", 1],
    ["D5", 1], ["E5", 1], ["G5", 2], ["E6", 2], ["R", 1], ["B5", 1],
    ["E5", 1], ["G5", 1], ["B5", 2], ["D6", 1], ["B5", 1], ["A5", 1], ["G5", 1],
    ["F#5", 1], ["G5", 1], ["A5", 2], ["B5", 3], ["R", 1],
    ["C5", 1], ["E5", 1], ["G5", 2], ["C6", 1], ["B5", 1], ["G5", 1], ["E5", 1],
    ["D5", 1], ["F#5", 1], ["A5", 2], ["D6", 2], ["B5", 2],
  ],
  titleBass: [
    ["E2", 1], ["E3", 1], ["E2", 1], ["B2", 1],
    ["C3", 1], ["C3", 1], ["D3", 1], ["D3", 1],
    ["E2", 1], ["E3", 1], ["G2", 1], ["G3", 1],
    ["B2", 1], ["B2", 1], ["D3", 1], ["B2", 1],
  ],
  unlock() {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return false;
    if (!this.ctx) {
      this.ctx = new AudioCtor();
      this.master = this.ctx.createGain();
      this.musicGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.master.gain.value = 0.72;
      this.musicGain.gain.value = 0.13;
      this.sfxGain.gain.value = 0.42;
      this.musicGain.connect(this.master);
      this.sfxGain.connect(this.master);
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
    this.unlocked = true;
    return true;
  },
  startMusic(mode = "game") {
    if (!this.unlock()) return;
    if (this.musicTimer && this.musicMode === mode) return;
    this.stopMusic();
    this.musicMode = mode;
    this.musicStep = 0;
    this.musicLead = this.ctx.currentTime;
    this.scheduleMusic();
  },
  stopMusic() {
    if (this.musicTimer) clearTimeout(this.musicTimer);
    if (this.midiLoopTimer) clearTimeout(this.midiLoopTimer);
    this.musicTimer = null;
    this.midiLoopTimer = null;
    this.activeMusicNodes.forEach((node) => {
      try {
        node.stop(0);
      } catch (error) {
        // Already stopped.
      }
    });
    this.activeMusicNodes = [];
  },
  scheduleMusic() {
    if (!this.ctx) return;
    const titleMode = this.musicMode === "title";
    const melody = titleMode ? this.titleMelody : this.melody;
    const bass = titleMode ? this.titleBass : this.bass;
    const [note, units] = melody[this.musicStep % melody.length];
    const [bassNote] = bass[this.musicStep % bass.length];
    const bpm = titleMode ? 166 : 154;
    const eighth = 60 / bpm / 2;
    const duration = units * eighth;
    const delay = Math.max(0, this.musicLead - this.ctx.currentTime);
    if (note !== "R") {
      const freq = noteFreq(note);
      this.tone(freq, duration * 0.9, "square", titleMode ? 0.22 : 0.15, delay, this.musicGain);
      this.tone(freq / 2, duration * 0.9, "triangle", titleMode ? 0.09 : 0.055, delay, this.musicGain);
      if (titleMode && this.musicStep % 2 === 0) this.tone(freq * 1.5, duration * 1.1, "sawtooth", 0.055, delay, this.musicGain);
    }
    if (bassNote !== "R" && (titleMode || this.musicStep % 2 === 0)) {
      this.tone(noteFreq(bassNote), duration * 1.35, titleMode ? "sawtooth" : "square", titleMode ? 0.13 : 0.075, delay, this.musicGain);
    }
    if (titleMode) {
      if (this.musicStep % 2 === 0) this.tone(82, duration * 0.72, "triangle", 0.12, delay, this.musicGain, 48);
      if (this.musicStep % 4 === 2) this.tone(220, duration * 0.45, "square", 0.055, delay, this.musicGain, 110);
    }
    this.musicStep += 1;
    this.musicLead += duration;
    this.musicTimer = setTimeout(() => this.scheduleMusic(), duration * 1000);
  },
  effect(name) {
    if (!this.unlock()) return;
    if (name === "move") {
      this.tone(460, 0.055, "square", 0.2, 0, this.sfxGain, 760);
      this.tone(920, 0.035, "square", 0.09, 0.045, this.sfxGain);
    } else if (name === "hit") {
      this.noise(0.22, 0.35);
      this.tone(210, 0.28, "sawtooth", 0.32, 0, this.sfxGain, 70);
    } else if (name === "score") {
      this.tone(660, 0.08, "square", 0.18, 0, this.sfxGain);
      this.tone(880, 0.1, "square", 0.18, 0.08, this.sfxGain);
      this.tone(1320, 0.16, "triangle", 0.16, 0.17, this.sfxGain);
    } else if (name === "level") {
      ["G4", "B4", "D5", "G5", "D5", "G5"].forEach((note, index) => {
        this.tone(noteFreq(note), 0.1, "square", 0.16, index * 0.1, this.sfxGain);
      });
    } else if (name === "start") {
      this.tone(392, 0.08, "square", 0.13, 0, this.sfxGain);
      this.tone(523, 0.08, "square", 0.13, 0.08, this.sfxGain);
      this.tone(784, 0.16, "square", 0.13, 0.16, this.sfxGain);
    } else if (name === "bus") {
      this.tone(196, 0.18, "square", 0.18, 0, this.sfxGain);
      this.tone(147, 0.2, "square", 0.13, 0.12, this.sfxGain);
    }
  },
  startEndTheme() {
    if (!this.unlock()) return;
    this.stopMusic();
    this.musicMode = "end";
    this.loadEndMidi()
      .then(() => {
        if (this.musicMode === "end") this.scheduleEndTheme();
      })
      .catch(() => {
        if (this.musicMode === "end") this.startMusic("title");
      });
  },
  loadEndMidi() {
    if (this.midiEvents) return Promise.resolve();
    return loadArrayBuffer("assets/end-theme.mid")
      .then((buffer) => {
        const parsed = parseMidi(buffer);
        this.midiEvents = parsed.events;
        this.midiDuration = parsed.duration;
      });
  },
  scheduleEndTheme() {
    if (!this.ctx || !this.midiEvents || !this.midiEvents.length) return;
    this.stopMusic();
    this.musicMode = "end";
    const startAt = this.ctx.currentTime + 0.08;
    const maxDuration = Math.min(this.midiDuration || 120, 150);
    this.midiEvents
      .filter((event) => event.time <= maxDuration && event.duration > 0.04)
      .forEach((event) => {
        const volume = Math.min(0.085, Math.max(0.018, (event.velocity / 127) * 0.075));
        this.midiTone(event.note, Math.min(event.duration, 4.5), volume, startAt - this.ctx.currentTime + event.time, event.channel);
      });
    this.midiLoopTimer = setTimeout(() => {
      if (this.musicMode === "end") this.scheduleEndTheme();
    }, Math.max(18, maxDuration) * 1000);
  },
  midiTone(note, duration, volume, delay, channel) {
    if (channel === 9) {
      this.tone(95 + (note % 8) * 18, Math.min(duration, 0.16), "triangle", volume * 0.65, delay, this.musicGain, 45);
      return;
    }
    const freq = 440 * Math.pow(2, (note - 69) / 12);
    const type = note < 48 ? "sawtooth" : note > 76 ? "square" : "triangle";
    this.tone(freq, duration, type, volume, delay, this.musicGain);
    if (note >= 54 && note <= 84) this.tone(freq * 0.5, duration * 0.95, "triangle", volume * 0.32, delay, this.musicGain);
  },
  tone(freq, duration, type, volume, delay = 0, destination = this.sfxGain, bendTo) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (bendTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, bendTo), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
    if (destination === this.musicGain) {
      this.activeMusicNodes.push(osc);
      osc.onended = () => {
        this.activeMusicNodes = this.activeMusicNodes.filter((node) => node !== osc);
      };
    }
  },
  noise(duration, volume) {
    if (!this.ctx) return;
    const sampleCount = Math.max(1, Math.floor(this.ctx.sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, sampleCount, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(this.sfxGain);
    source.start(now);
  },
};

function noteFreq(note) {
  const match = note.match(/^([A-G]#?)(\d)$/);
  if (!match) return 440;
  const names = { C: 0, "C#": 1, D: 2, "D#": 3, E: 4, F: 5, "F#": 6, G: 7, "G#": 8, A: 9, "A#": 10, B: 11 };
  const midi = (Number(match[2]) + 1) * 12 + names[match[1]];
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function parseMidi(buffer) {
  const bytes = new Uint8Array(buffer);
  let offset = 0;
  const readString = (length) => {
    const value = String.fromCharCode(...bytes.slice(offset, offset + length));
    offset += length;
    return value;
  };
  const read16 = () => {
    const value = (bytes[offset] << 8) | bytes[offset + 1];
    offset += 2;
    return value;
  };
  const read32 = () => {
    const value = (bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3];
    offset += 4;
    return value >>> 0;
  };
  const readVar = () => {
    let value = 0;
    let byte;
    do {
      byte = bytes[offset++];
      value = (value << 7) | (byte & 0x7f);
    } while (byte & 0x80);
    return value;
  };

  if (readString(4) !== "MThd") throw new Error("Invalid MIDI header");
  const headerLength = read32();
  offset += 2;
  const tracks = read16();
  const division = read16();
  offset += Math.max(0, headerLength - 6);

  const events = [];
  let duration = 0;
  for (let track = 0; track < tracks; track += 1) {
    if (readString(4) !== "MTrk") break;
    const trackEnd = offset + read32();
    let time = 0;
    let tempo = 500000;
    let runningStatus = 0;
    const active = new Map();

    while (offset < trackEnd) {
      const delta = readVar();
      time += (delta * tempo) / division / 1000000;
      let status = bytes[offset++];
      if (status < 0x80) {
        offset -= 1;
        status = runningStatus;
      } else {
        runningStatus = status;
      }

      if (status === 0xff) {
        const type = bytes[offset++];
        const length = readVar();
        if (type === 0x51 && length === 3) tempo = (bytes[offset] << 16) | (bytes[offset + 1] << 8) | bytes[offset + 2];
        offset += length;
        continue;
      }
      if (status === 0xf0 || status === 0xf7) {
        offset += readVar();
        continue;
      }

      const command = status & 0xf0;
      const channel = status & 0x0f;
      const data1 = bytes[offset++];
      const data2 = command === 0xc0 || command === 0xd0 ? 0 : bytes[offset++];
      if (command !== 0x80 && command !== 0x90) continue;

      const key = `${channel}:${data1}`;
      if (command === 0x90 && data2 > 0) {
        if (!active.has(key)) active.set(key, []);
        active.get(key).push({ time, velocity: data2, channel, note: data1 });
      } else {
        const stack = active.get(key);
        const start = stack && stack.shift();
        if (!start) continue;
        const event = {
          time: start.time,
          duration: Math.max(0.04, time - start.time),
          note: start.note,
          velocity: start.velocity,
          channel: start.channel,
        };
        duration = Math.max(duration, event.time + event.duration);
        events.push(event);
      }
    }
    offset = trackEnd;
  }
  events.sort((a, b) => a.time - b.time);
  const startTime = events[0]?.time || 0;
  let normalizedDuration = 0;
  events.forEach((event) => {
    event.time = Math.max(0, event.time - startTime);
    normalizedDuration = Math.max(normalizedDuration, event.time + event.duration);
  });
  return { events, duration: normalizedDuration || duration };
}

function loadArrayBuffer(src) {
  const fetchPromise =
    typeof fetch === "function"
      ? fetch(src).then((response) => {
          if (!response.ok) throw new Error("Unable to load binary asset");
          return response.arrayBuffer();
        })
      : Promise.reject(new Error("Fetch unavailable"));

  return fetchPromise.catch(
    () =>
      new Promise((resolve, reject) => {
        if (typeof XMLHttpRequest !== "function") {
          reject(new Error("XHR unavailable"));
          return;
        }
        const request = new XMLHttpRequest();
        request.open("GET", src, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
          if (request.status === 0 || (request.status >= 200 && request.status < 300)) resolve(request.response);
          else reject(new Error("Unable to load binary asset"));
        };
        request.onerror = reject;
        request.send();
      }),
  );
}

function resetGame() {
  chipAudio.startMusic("game");
  chipAudio.effect("start");
  state = {
    status: "playing",
    score: 0,
    highScore: Number(localStorage.getItem("hydeHighScore") || 100000),
    level: 1,
    wave: 1,
    remaining: PEDESTRIAN_COUNT,
    currentPed: 0,
    message: "",
    successCard: null,
    failureCard: null,
    player: { x: W / 2 - PLAYER_W / 2, y: startY, alive: true, invincible: 0 },
    cars: [],
    buses: [],
    busTimer: 0.35,
    nextBusTurn: "right",
    npcs: buildAmbientPedestrians(),
    mobilityActors: buildInitialMobilityActors(),
    mobilityTimer: 2.2,
    mobilitySpawnIndex: 0,
    particles: [],
    impacts: [],
  };
  buildTraffic();
  updatePauseButton();
  hideSuccessButton();
  hideFailureButton();
  hideOverlay();
}

function buildTitleState() {
  return {
    status: "title",
    score: 0,
    highScore: Number(localStorage.getItem("hydeHighScore") || 100000),
    level: 1,
    remaining: PEDESTRIAN_COUNT,
    currentPed: 0,
    successCard: null,
    failureCard: null,
    player: { x: W / 2 - PLAYER_W / 2, y: startY, invincible: 0 },
    cars: [],
    buses: [],
    busTimer: 0.35,
    nextBusTurn: "right",
    npcs: buildAmbientPedestrians(),
    mobilityActors: buildInitialMobilityActors(),
    mobilityTimer: 2.2,
    mobilitySpawnIndex: 0,
    particles: [],
    impacts: [],
  };
}

function buildTraffic() {
  state.cars = [];
  laneDefs.forEach((lane, laneIndex) => {
    const count = Math.ceil(W / lane.gap) + 1;
    for (let i = 0; i < count; i++) {
      const spriteIndex = (laneIndex * 4 + i) % DIVERSE_VEHICLE_CROPS.length;
      const size = vehicleSizeForSprite(spriteIndex);
      state.cars.push({
        lane: laneIndex,
        x: i * lane.gap + laneIndex * 96,
        y: lane.y,
        w: size.w,
        h: size.h,
        dir: lane.dir,
        speed: lane.speed,
        spriteIndex,
        color: lane.color,
        trim: ["#101820", "#d9d2c3", "#6b3d28", "#111111"][i % 4],
      });
    }
  });
}

function vehicleSizeForSprite(index) {
  const [w, h] = DIVERSE_VEHICLE_SIZES[index % DIVERSE_VEHICLE_SIZES.length];
  return { w, h };
}

function buildAmbientPedestrians() {
  return [
    { x: 340, y: 252, dir: 1, speed: 22, spriteIndex: 0, zone: "north" },
    { x: 1010, y: 648, dir: -1, speed: 18, spriteIndex: 2, zone: "south" },
    { x: 496, y: 644, dir: 1, speed: 20, spriteIndex: 4, zone: "south" },
    { x: 720, y: 250, dir: -1, speed: 16, spriteIndex: 5, zone: "north" },
    { x: 246, y: 648, dir: 1, speed: 14, spriteIndex: 1, zone: "south" },
    { x: 256, y: 330, dir: 1, speed: 12, spriteIndex: 3, zone: "street" },
    { x: 914, y: 520, dir: -1, speed: 10, spriteIndex: 0, zone: "street" },
  ];
}

function buildInitialMobilityActors() {
  return [
    buildMobilityActor("cyclist", "north", -90, 1, 0),
    buildMobilityActor("stroller", "south", W + 110, -1, 2),
  ];
}

function buildMobilityActor(type, zone, x, dir, variant = Math.floor(Math.random() * 3)) {
  const north = zone === "north";
  const seed = variant + (type === "cyclist" ? 6 : 0);
  return {
    type,
    variant,
    zone,
    x,
    dir,
    baseY: north ? 248 : 648,
    y: north ? 248 : 648,
    speed: type === "cyclist" ? 38 + Math.random() * 8 : 15 + Math.random() * 4,
    spriteIndex: pedestrianSpriteIndex(seed),
    childIndex: pedestrianSpriteIndex(seed + 4),
    wobble: Math.random() * Math.PI * 2,
    avoid: 0,
    sideStep: 0,
  };
}

function nextPedestrian() {
  state.currentPed += 1;
  state.remaining -= 1;
  state.successCard = null;
  state.score += 350;
  if (state.remaining <= 0) {
    state.score += 2500;
    beginEndScreen();
    return;
  }
  state.player.x = W / 2 - PLAYER_W / 2;
  state.player.y = startY;
  state.player.alive = true;
  state.player.invincible = 0.45;
}

function beginSuccess() {
  if (!state || state.status !== "playing") return;
  state.status = "success";
  keys.clear();
  chipAudio.effect("score");
  state.successCard = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
  hideFailureButton();
  showSuccessButton();
  updatePauseButton();
}

function completeSuccess() {
  if (!state || state.status !== "success") return;
  hideSuccessButton();
  state.status = "playing";
  nextPedestrian();
  updatePauseButton();
}

function hitPlayer() {
  if (!state || state.status !== "playing" || state.player.invincible > 0) return;
  hideSuccessButton();
  chipAudio.effect("hit");
  burst(state.player.x + PLAYER_W / 2, state.player.y + PLAYER_H / 2);
  beginFailure();
}

function beginFailure() {
  if (!state || state.status !== "playing") return;
  state.status = "failure";
  keys.clear();
  state.failureCard = FAILURE_MESSAGES[Math.floor(Math.random() * FAILURE_MESSAGES.length)];
  showFailureButton();
  updatePauseButton();
}

function completeFailure() {
  if (!state || state.status !== "failure") return;
  hideFailureButton();
  state.remaining -= 1;
  state.currentPed += 1;
  if (state.remaining <= 0) {
    beginEndScreen();
    return;
  }
  state.status = "playing";
  state.player.x = W / 2 - PLAYER_W / 2;
  state.player.y = startY;
  state.player.invincible = 0.75;
  state.failureCard = null;
  updatePauseButton();
}

function beginEndScreen() {
  state.status = "ending";
  keys.clear();
  hideSuccessButton();
  hideFailureButton();
  hideOverlay();
  saveHighScore();
  updatePauseButton();
  chipAudio.startMusic("title");
}

function returnToMainMenu() {
  chipAudio.stopMusic();
  state = buildTitleState();
  buildTraffic();
  hideSuccessButton();
  hideFailureButton();
  hideOverlay();
  updatePauseButton();
}

function saveHighScore() {
  state.highScore = Math.max(state.highScore, state.score);
  localStorage.setItem("hydeHighScore", String(state.highScore));
}

function update(dt) {
  if (!state || state.status !== "playing") return;
  moveCooldown = Math.max(0, moveCooldown - dt);
  state.player.invincible = Math.max(0, state.player.invincible - dt);
  handleMovement();

  updateTraffic(dt);
  wrapTraffic();
  updateBuses(dt);
  updateAmbientPedestrians(dt);
  updateMobilityActors(dt);

  state.particles = state.particles.filter((p) => p.life > 0);
  state.particles.forEach((p) => {
    p.life -= dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
  });
  state.impacts = state.impacts.filter((impact) => impact.life > 0);
  state.impacts.forEach((impact) => {
    impact.life -= dt;
    impact.scale += dt * 0.55;
  });

  if (state.player.y <= targetY) beginSuccess();
  saveHighScore();
}

function updateTraffic(dt) {
  const activeBus = getActiveBus();
  laneDefs.forEach((lane, laneIndex) => {
    const laneCars = state.cars
      .filter((car) => car.lane === laneIndex)
      .sort((a, b) => (lane.dir > 0 ? b.x - a.x : a.x - b.x));

    let vehicleAhead = null;
    laneCars.forEach((car) => {
      const pace = car.speed + (state.level - 1) * 18;
      let nextX = car.x + lane.dir * pace * dt;

      nextX = applyBusStopLine(car, nextX, activeBus);
      nextX = applyFollowingGap(car, nextX, vehicleAhead, lane);
      car.x = nextX;

      if (rectsOverlap(state.player, car) && state.player.y < ROAD_BOTTOM && state.player.y > ROAD_TOP - 20) {
        hitPlayer();
      }
      vehicleAhead = car;
    });
  });
}

function wrapTraffic() {
  laneDefs.forEach((lane, laneIndex) => {
    const laneCars = state.cars.filter((car) => car.lane === laneIndex);
    laneCars.forEach((car) => {
      if (lane.dir > 0 && car.x > W + 60) {
        const minX = Math.min(...laneCars.filter((other) => other !== car).map((other) => other.x));
        car.x = minX - lane.gap;
      }
      if (lane.dir < 0 && car.x < -car.w - 60) {
        const maxX = Math.max(...laneCars.filter((other) => other !== car).map((other) => other.x));
        car.x = maxX + lane.gap;
      }
    });
  });
}

function getActiveBus() {
  return state.buses.find((bus) => bus.phase !== "done");
}

function applyBusStopLine(car, nextX, bus) {
  if (!bus) return nextX;
  const lane = laneDefs[car.lane];
  if (bus.phase === "done") return nextX;

  const stopX = lane.dir > 0 ? BUS_ZONE_X1 - car.w - TRAFFIC_STOP_PADDING : BUS_ZONE_X2 + TRAFFIC_STOP_PADDING;
  const carInsideZone = car.x < BUS_ZONE_X2 && car.x + car.w > BUS_ZONE_X1;
  const shouldHold = bus.phase === "waiting" || bus.phase === "turning" || bus.phase === "cruising";
  if (!shouldHold || carInsideZone) return nextX;

  if (lane.dir > 0 && car.x < stopX && nextX > stopX) {
    return stopX;
  }
  if (lane.dir < 0 && car.x > stopX && nextX < stopX) {
    return stopX;
  }

  return nextX;
}

function applyFollowingGap(car, nextX, vehicleAhead, lane) {
  if (!vehicleAhead) return nextX;
  if (lane.dir > 0) {
    return Math.min(nextX, vehicleAhead.x - car.w - TRAFFIC_FOLLOW_GAP);
  }
  return Math.max(nextX, vehicleAhead.x + vehicleAhead.w + TRAFFIC_FOLLOW_GAP);
}

function isBusRouteClear(bus) {
  const [pathX1, pathX2] = getBusPath(bus);
  return !state.cars.some((car) => car.x < pathX2 && car.x + car.w > pathX1);
}

function getBusPath(bus) {
  if (!bus) return [BUS_PATH_X1, BUS_PATH_X2];
  return bus.turnDir === "right" ? [BUS_PATH_X1, BUS_PATH_X2 + 35] : [BUS_PATH_X1 - 35, BUS_PATH_X2];
}

function forceBusGap(bus) {
  const [pathX1, pathX2] = getBusPath(bus);
  laneDefs.forEach((lane, laneIndex) => {
    const affected = state.cars
      .filter((car) => car.lane === laneIndex && car.x < pathX2 && car.x + car.w > pathX1)
      .sort((a, b) => (lane.dir > 0 ? b.x - a.x : a.x - b.x));
    if (!affected.length) return;

    const laneCars = state.cars.filter((car) => car.lane === laneIndex && !affected.includes(car));
    if (lane.dir > 0) {
      let nextFrontX = BUS_ZONE_X1 - TRAFFIC_STOP_PADDING;
      const queued = laneCars
        .filter((car) => car.x + car.w <= BUS_ZONE_X1)
        .sort((a, b) => b.x - a.x)[0];
      if (queued) nextFrontX = Math.min(nextFrontX, queued.x - TRAFFIC_FOLLOW_GAP);
      affected.forEach((car) => {
        car.x = nextFrontX - car.w;
        nextFrontX = car.x - TRAFFIC_FOLLOW_GAP;
      });
    } else {
      let nextX = BUS_ZONE_X2 + TRAFFIC_STOP_PADDING;
      const queued = laneCars
        .filter((car) => car.x >= BUS_ZONE_X2)
        .sort((a, b) => a.x - b.x)[0];
      if (queued) nextX = Math.max(nextX, queued.x + queued.w + TRAFFIC_FOLLOW_GAP);
      affected.forEach((car) => {
        car.x = nextX;
        nextX = car.x + car.w + TRAFFIC_FOLLOW_GAP;
      });
    }
  });
}

function startBusTurn(bus) {
  forceBusGap(bus);
  bus.phase = "turning";
  bus.age = 0;
  chipAudio.effect("bus");
}

function updateBuses(dt) {
  state.busTimer -= dt;
  if (state.busTimer <= 0 && !getActiveBus()) {
    const turnDir = state.nextBusTurn;
    state.nextBusTurn = turnDir === "right" ? "left" : "right";
    state.buses.push({
      x: 592,
      y: 248,
      w: 188,
      h: 78,
      phase: "waiting",
      turnDir,
      frame: 0,
      age: 0,
      waitAge: 0,
      startX: 592,
      startY: 248,
      endX: turnDir === "right" ? 646 : 512,
      endY: turnDir === "right" ? laneDefs[3].y - 14 : laneDefs[1].y - 14,
    });
    state.busTimer = 8.5 + Math.random() * 2.5;
  }

  state.buses = state.buses.filter((bus) => bus.phase !== "done" && bus.x < W + 160 && bus.x > -180);
  state.buses.forEach((bus) => {
    if (bus.phase === "waiting") {
      bus.waitAge += dt;
      bus.x = bus.startX;
      bus.y = bus.startY;
      bus.frame = 0;
      if ((bus.waitAge >= BUS_MIN_WAIT && isBusRouteClear(bus)) || bus.waitAge >= BUS_MAX_WAIT) startBusTurn(bus);
    } else if (bus.phase === "turning") {
      bus.age += dt;
      const t = Math.min(1, bus.age / BUS_TURN_DURATION);
      const eased = easeInOut(t);
      bus.x = lerp(bus.startX, bus.endX, eased);
      bus.y = lerp(bus.startY, bus.endY, eased);
      bus.frame = Math.min(BUS_TURN_COLS - 1, Math.floor(eased * BUS_TURN_COLS));
      if (t >= 1) {
        bus.phase = "cruising";
        bus.frame = BUS_TURN_COLS - 1;
      }
    } else if (bus.phase === "cruising") {
      bus.x += (bus.turnDir === "right" ? BUS_CRUISE_SPEED : -BUS_CRUISE_SPEED) * dt;
      bus.frame = BUS_TURN_COLS - 1;
      if ((bus.turnDir === "right" && bus.x > BUS_ZONE_X2 + 80) || (bus.turnDir === "left" && bus.x + bus.w < BUS_ZONE_X1 - 80)) {
        bus.phase = "done";
      }
    }

    const busBox = { x: bus.x, y: bus.y, w: bus.w, h: bus.h };
    if (rectsOverlap(state.player, busBox) && state.player.y < ROAD_BOTTOM && state.player.y > ROAD_TOP - 20) {
      hitPlayer();
    }
  });
}

function updateAmbientPedestrians(dt) {
  state.npcs.forEach((npc) => {
    npc.x += npc.dir * npc.speed * dt;
    const margin = 70;
    if (npc.dir > 0 && npc.x > W + margin) npc.x = -margin;
    if (npc.dir < 0 && npc.x < -margin) npc.x = W + margin;
  });
}

function updateMobilityActors(dt) {
  state.mobilityTimer -= dt;
  if (state.mobilityTimer <= 0 && state.mobilityActors.length < MOBILITY_MAX_ACTORS) {
    const zone = Math.random() < 0.5 ? "north" : "south";
    const dir = Math.random() < 0.5 ? 1 : -1;
    const next = MOBILITY_SPAWN_SEQUENCE[state.mobilitySpawnIndex % MOBILITY_SPAWN_SEQUENCE.length];
    const x = dir > 0 ? -150 : W + 150;
    if (canSpawnMobilityActor(zone, dir)) {
      state.mobilityActors.push(buildMobilityActor(next.type, zone, x, dir, next.variant));
      state.mobilitySpawnIndex += 1;
      state.mobilityTimer = 4.4 + Math.random() * 4.2;
    } else {
      state.mobilityTimer = 1.2;
    }
  }

  state.mobilityActors.forEach((actor) => {
    const trafficClose = isTrafficCloseToSidewalkActor(actor);
    actor.avoid = trafficClose ? Math.min(1, actor.avoid + dt * 4) : Math.max(0, actor.avoid - dt * 3);
    const avoidY = actor.zone === "north" ? -12 : 12;
    const clusterOffset = getMobilityClusterOffset(actor);
    actor.sideStep = lerp(actor.sideStep, clusterOffset, Math.min(1, dt * 5));
    actor.y = actor.baseY + avoidY * actor.avoid + actor.sideStep;
    const cautionMultiplier = actor.type === "cyclist" ? 0.68 : 0.42;
    const pace = actor.speed * (trafficClose ? cautionMultiplier : 1);
    actor.x += actor.dir * pace * dt;
    actor.wobble += dt * (actor.type === "cyclist" ? 7 : 4);
  });

  state.mobilityActors = state.mobilityActors.filter((actor) => actor.x > -220 && actor.x < W + 220);
}

function canSpawnMobilityActor(zone, dir) {
  if (state.mobilityActors.filter((actor) => actor.zone === zone).length >= 2) return false;
  return !state.mobilityActors.some((actor) => {
    if (actor.zone !== zone) return false;
    return dir > 0 ? actor.x < MOBILITY_SPAWN_CLEARANCE : actor.x > W - MOBILITY_SPAWN_CLEARANCE;
  });
}

function getMobilityClusterOffset(actor) {
  const closeActors = state.mobilityActors.filter((other) => other !== actor && other.zone === actor.zone && Math.abs(other.x - actor.x) < MOBILITY_MIN_GAP);
  if (!closeActors.length) return 0;
  const offsetDir = actor.x < closeActors[0].x ? -1 : 1;
  return offsetDir * (actor.zone === "north" ? 7 : -7);
}

function isTrafficCloseToSidewalkActor(actor) {
  const laneIndex = actor.zone === "north" ? 0 : laneDefs.length - 1;
  const cautionWidth = actor.type === "cyclist" ? 126 : 96;
  const carsNear = state.cars.some((car) => car.lane === laneIndex && car.x < actor.x + cautionWidth && car.x + car.w > actor.x - cautionWidth);
  const busesNear = state.buses.some((bus) => bus.phase !== "done" && bus.x < actor.x + 160 && bus.x + bus.w > actor.x - 160);
  return carsNear || busesNear;
}

function handleMovement() {
  if (moveCooldown > 0) return;
  let dx = 0;
  let dy = 0;
  if (keys.has("ArrowLeft") || keys.has("a")) dx -= STEP_X;
  else if (keys.has("ArrowRight") || keys.has("d")) dx += STEP_X;
  else if (keys.has("ArrowUp") || keys.has("w")) dy -= STEP_Y;
  else if (keys.has("ArrowDown") || keys.has("s")) dy += STEP_Y;
  if (!dx && !dy) return;
  state.player.x = clamp(state.player.x + dx, 18, W - PLAYER_W - 18);
  state.player.y = clamp(state.player.y + dy, targetY - 2, startY + 14);
  moveCooldown = 0.115;
  chipAudio.effect("move");
}

function draw() {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, W, H);
  if (state && state.status === "title") {
    drawTitleScreen();
    return;
  }
  if (state && state.status === "ending") {
    drawEndScreen();
    return;
  }
  drawBackdrop();
  drawRoad();
  drawAmbientPedestrians("north");
  drawMobilityActors("north");
  drawAmbientPedestrians("street");
  drawCars();
  drawBuses();
  drawSidewalkCrowd();
  drawMobilityActors("south");
  drawAmbientPedestrians("south");
  drawPlayer();
  drawParticles();
  drawHud();
  if (state && state.status === "success") drawSuccessDialog();
  if (state && state.status === "failure") drawFailureDialog();
  if (state && state.status === "paused") drawPauseDialog();
}

function drawTitleScreen() {
  const layout = titleImageLayout();
  ctx.fillStyle = "#05090f";
  ctx.fillRect(0, 0, W, H);
  if (isImageReady(titleScreen)) {
    ctx.drawImage(titleScreen, layout.x, layout.y, layout.w, layout.h);
    drawTitleCopyright(layout);
  } else {
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#231a36");
    sky.addColorStop(0.48, "#8b2f25");
    sky.addColorStop(1, "#071018");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#efe8d8";
    ctx.font = "700 72px Courier New";
    ctx.fillText("BOSTON:", 300, 120);
    ctx.fillStyle = "#c01d1d";
    ctx.font = "700 58px Courier New";
    ctx.fillText("NO SAFE CROSSING", 182, 198);
    ctx.fillStyle = "#9e9a8f";
    ctx.font = "700 16px Courier New";
    ctx.fillText("(C) 2026 BOSTON BETTER STREETS COALITION", 28, H - 34);
  }

  const rect = titleHydeRect();
  const blinkOn = Math.floor(performance.now() / 360) % 2 === 0;
  ctx.save();
  ctx.globalAlpha = blinkOn ? 1 : 0.32;
  ctx.strokeStyle = blinkOn ? "#ffd36a" : "#e96822";
  ctx.lineWidth = blinkOn ? 6 : 4;
  roundRect(rect.x, rect.y, rect.w, rect.h, 9, false);
  ctx.stroke();
  ctx.strokeStyle = "#0a0b0d";
  ctx.lineWidth = 2;
  roundRect(rect.x + 7, rect.y + 7, rect.w - 14, rect.h - 14, 6, false);
  ctx.stroke();
  ctx.restore();
}

function drawEndScreen() {
  const layout = endImageLayout();
  ctx.fillStyle = "#05090f";
  ctx.fillRect(0, 0, W, H);
  if (isImageReady(endScreen)) {
    ctx.drawImage(endScreen, layout.x, layout.y, layout.w, layout.h);
  } else {
    ctx.fillStyle = "#111820";
    ctx.fillRect(layout.x, layout.y, layout.w, layout.h);
    ctx.fillStyle = "#c73522";
    ctx.font = "700 72px Courier New";
    ctx.fillText("GAME OVER", 178, 150);
    ctx.fillStyle = "#efe8d8";
    ctx.font = "700 52px Courier New";
    ctx.fillText("HYDE PARK AVENUE", 118, 250);
  }

  const rect = endMainMenuRect();
  const blinkOn = Math.floor(performance.now() / 420) % 2 === 0;
  ctx.save();
  ctx.globalAlpha = blinkOn ? 0.95 : 0.34;
  ctx.strokeStyle = blinkOn ? "#ffd36a" : "#e96822";
  ctx.lineWidth = blinkOn ? 6 : 4;
  roundRect(rect.x, rect.y, rect.w, rect.h, 8, false);
  ctx.stroke();
  ctx.restore();
}

function drawTitleCopyright(layout) {
  const scale = layout.scale;
  const coverX = layout.x + 30 * scale;
  const coverY = layout.y + 984 * scale;
  const coverW = 430 * scale;
  const coverH = 34 * scale;
  ctx.fillStyle = "#06101a";
  ctx.fillRect(coverX, coverY, coverW, coverH);
  ctx.fillStyle = "#9f9a90";
  drawFittedText("(C) 2026 BOSTON BETTER STREETS COALITION", coverX + 4 * scale, coverY + 21 * scale, coverW - 8 * scale, Math.max(11, 18 * scale), "700");
}

function drawBackdrop() {
  if (drawReference("topEnvironment", 0, 0, W, 260)) {
    drawReferenceCrop("stationExit", 105, 112, 490, 212, 390, 128, 370, 132);
    drawReferenceCrop("stationRight", 60, 70, 610, 300, 760, 88, 304, 172);
    drawMayorPanel();
    return;
  }

  const sky = ctx.createLinearGradient(0, 0, 0, 160);
  sky.addColorStop(0, "#092a58");
  sky.addColorStop(1, "#111d25");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, 166);

  ctx.fillStyle = "#32383c";
  ctx.fillRect(0, 110, W, 124);
  ctx.fillStyle = "#1b2529";
  for (let x = 40; x < W; x += 82) {
    ctx.fillRect(x, 128, 44, 72);
    ctx.fillStyle = "#d6a64b";
    ctx.fillRect(x + 8, 146, 10, 12);
    ctx.fillRect(x + 26, 146, 10, 12);
    ctx.fillStyle = "#1b2529";
  }

  ctx.fillStyle = "#efe5cf";
  if (!drawSprite("stationSign", 382, 18, 306, 74)) {
    ctx.fillRect(382, 20, 298, 64);
    ctx.strokeStyle = "#111";
    ctx.lineWidth = 4;
    ctx.strokeRect(382, 20, 298, 64);
    ctx.fillStyle = "#d67525";
    ctx.fillRect(390, 27, 80, 50);
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(430, 52, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d67525";
    ctx.fillRect(425, 34, 10, 36);
    ctx.fillRect(413, 45, 34, 10);
    ctx.fillStyle = "#fff3df";
    ctx.font = "700 26px Courier New";
    ctx.fillText("FOREST HILLS", 484, 48);
    ctx.fillStyle = "#141414";
    ctx.fillText("ORANGE LINE", 484, 76);
  }

  ctx.fillStyle = "#876a46";
  ctx.fillRect(0, 204, W, 68);
  ctx.fillStyle = "#394438";
  for (let x = 0; x < W; x += 24) {
    ctx.fillRect(x, 208 + (x % 48), 20, 32);
  }
  drawSprite("planter", 336, 188, 132, 76);
  drawSprite("planter", 704, 188, 132, 76);
  drawSprite("lamp", 142, 110, 46, 154);

  drawMayorPanel();
}

function drawMayorPanel() {
  const line = mayorLines[Math.floor(performance.now() / 5200) % mayorLines.length];
  ctx.fillStyle = "#e9dfc9";
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 4;
  roundRect(22, 12, 126, 124, 6, true);
  ctx.strokeRect(22, 12, 126, 124);
  const mayorIndex = mayorLines.indexOf(line);
  if (!drawMayorPortrait(mayorIndex, 38, 20, 96, 112) && !drawReference("mayorPortrait", 36, 22, 96, 104)) {
    drawFace(78, 70, "#a95e32", "#151315");
  }
  ctx.fillStyle = "#fffdf2";
  roundRect(148, 18, 262, 118, 8, true);
  ctx.strokeRect(148, 18, 262, 118);
  ctx.fillStyle = "#111";
  drawFittedWrappedText(line.text, 166, 42, 226, 20, 4, 20, 12, "700", 82);
  ctx.fillStyle = "#123b74";
  ctx.fillRect(24, 132, 132, 48);
  ctx.strokeRect(24, 132, 132, 48);
  ctx.fillStyle = "#fff";
  ctx.font = "700 18px Courier New";
  ctx.fillText("MAYOR", 60, 154);
  ctx.fillText("MICHELLE WU", 34, 174);
}

function drawPauseDialog() {
  ctx.save();
  ctx.fillStyle = "rgba(3, 5, 8, 0.58)";
  ctx.fillRect(0, 0, W, H);

  const x = 234;
  const y = 294;
  const w = 596;
  const h = 274;
  ctx.fillStyle = "#efe8d8";
  ctx.strokeStyle = "#090909";
  ctx.lineWidth = 5;
  roundRect(x, y, w, h, 8, true);
  ctx.strokeRect(x, y, w, h);
  ctx.strokeStyle = "#b79a68";
  ctx.lineWidth = 4;
  ctx.strokeRect(x + 10, y + 10, w - 20, h - 20);

  ctx.fillStyle = "#d9cfbb";
  roundRect(x + 28, y + 28, 158, 168, 5, true);
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 4;
  ctx.strokeRect(x + 28, y + 28, 158, 168);
  if (isImageReady(nickPortrait)) {
    ctx.drawImage(nickPortrait, 0, 0, nickPortrait.naturalWidth, nickPortrait.naturalHeight, x + 36, y + 36, 142, 152);
  } else {
    drawFace(x + 107, y + 112, "#b87855", "#5a3822");
  }

  ctx.fillStyle = "#123b74";
  ctx.fillRect(x + 30, y + 198, 154, 52);
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 3;
  ctx.strokeRect(x + 30, y + 198, 154, 52);
  ctx.fillStyle = "#fff";
  ctx.font = "700 13px Courier New";
  ctx.fillText("CHIEF OF STREETS", x + 38, y + 218);
  ctx.font = "700 18px Courier New";
  ctx.fillText("NICK GOVE", x + 58, y + 240);

  ctx.fillStyle = "#fffdf2";
  roundRect(x + 210, y + 46, 338, 152, 6, true);
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 4;
  ctx.strokeRect(x + 210, y + 46, 338, 152);
  ctx.fillStyle = "#111";
  ctx.font = "700 25px Courier New";
  drawWrappedText("Nothing is on pause! Nothing is on pause!", x + 232, y + 92, 286, 34, 4);

  ctx.fillStyle = "#315e34";
  ctx.font = "700 19px Courier New";
  ctx.fillText("Press Resume or P to continue", x + 246, y + 236);
  ctx.restore();
}

function drawSuccessDialog() {
  const card = state.successCard || SUCCESS_MESSAGES[0];
  ctx.save();
  ctx.fillStyle = "rgba(3, 5, 8, 0.58)";
  ctx.fillRect(0, 0, W, H);

  const x = 258;
  const y = 178;
  const w = 548;
  const h = 476;
  drawSnesPanel(x, y, w, h, "#efe8d8", "#285a42");

  ctx.fillStyle = "#285a42";
  ctx.font = "700 42px Courier New";
  ctx.fillText("Congratulations!", x + 72, y + 62);

  drawSuccessImage(card.image, x + 154, y + 86, 240, 240);

  ctx.fillStyle = "#111";
  ctx.font = "700 23px Courier New";
  drawWrappedText(card.text, x + 74, y + 376, w - 148, 31, 3);

  ctx.fillStyle = "#725219";
  ctx.font = "700 17px Courier New";
  ctx.fillText("Press Continue or Space", x + 156, y + 438);
  ctx.restore();
}

function drawSuccessImage(index, x, y, w, h) {
  drawImageFrame(x, y, w, h, "#285a42");
  if (!isImageReady(successPopupSheet)) {
    ctx.fillStyle = "#e2ac1f";
    roundRect(x, y, w, h, 12, true);
    return;
  }
  const cellW = successPopupSheet.naturalWidth / 2;
  const cellH = successPopupSheet.naturalHeight / 2;
  const sx = (index % 2) * cellW;
  const sy = Math.floor(index / 2) * cellH;
  drawRoundedImage(successPopupSheet, sx, sy, cellW, cellH, x, y, w, h, 12);
}

function drawFailureDialog() {
  const card = state.failureCard || FAILURE_MESSAGES[0];
  ctx.save();
  ctx.fillStyle = "rgba(3, 5, 8, 0.62)";
  ctx.fillRect(0, 0, W, H);

  const x = 246;
  const y = 168;
  const w = 572;
  const h = 496;
  drawSnesPanel(x, y, w, h, "#efe8d8", "#8b2f25");

  ctx.fillStyle = "#8b2f25";
  ctx.font = "700 46px Courier New";
  ctx.fillText("Sorry!", x + 202, y + 66);

  drawFailureImage(card.image, x + 170, y + 88, 232, 232);

  ctx.fillStyle = "#111";
  ctx.font = "700 23px Courier New";
  drawWrappedText(card.text, x + 66, y + 382, w - 132, 31, 3);

  ctx.fillStyle = "#725219";
  ctx.font = "700 17px Courier New";
  ctx.fillText("Press Continue or Space", x + 168, y + 456);
  ctx.restore();
}

function drawFailureImage(index, x, y, w, h) {
  drawImageFrame(x, y, w, h, "#8b2f25");
  if (!isImageReady(failurePopupSheet)) {
    ctx.fillStyle = "#8b2f25";
    roundRect(x, y, w, h, 12, true);
    return;
  }
  const cellW = failurePopupSheet.naturalWidth / 3;
  const cellH = failurePopupSheet.naturalHeight / 2;
  const sx = (index % 3) * cellW;
  const sy = Math.floor(index / 3) * cellH;
  drawRoundedImage(failurePopupSheet, sx, sy, cellW, cellH, x, y, w, h, 12);
}

function drawSnesPanel(x, y, w, h, fill, accent) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
  roundRect(x + 8, y + 10, w, h, 22, true);
  ctx.fillStyle = "#111";
  roundRect(x, y, w, h, 22, true);
  ctx.fillStyle = accent;
  roundRect(x + 5, y + 5, w - 10, h - 10, 18, true);
  ctx.fillStyle = "#d9cfbb";
  roundRect(x + 13, y + 13, w - 26, h - 26, 14, true);
  ctx.fillStyle = fill;
  roundRect(x + 20, y + 20, w - 40, h - 40, 12, true);
  ctx.fillStyle = "rgba(255, 255, 255, 0.28)";
  roundRect(x + 32, y + 30, w - 64, 8, 4, true);
}

function drawImageFrame(x, y, w, h, accent) {
  ctx.fillStyle = "#111";
  roundRect(x - 8, y - 8, w + 16, h + 16, 16, true);
  ctx.fillStyle = accent;
  roundRect(x - 4, y - 4, w + 8, h + 8, 14, true);
  ctx.fillStyle = "#050606";
  roundRect(x, y, w, h, 12, true);
}

function drawRoundedImage(image, sx, sy, sw, sh, dx, dy, dw, dh, radius) {
  ctx.save();
  roundedClip(dx, dy, dw, dh, radius);
  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.restore();
}

function roundedClip(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.clip();
}

function drawMayorExpression(cx, cy, expression) {
  ctx.save();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#0c0c0c";
  ctx.fillStyle = "#0c0c0c";
  if (expression === "concerned") {
    ctx.beginPath();
    ctx.moveTo(cx - 24, cy - 28);
    ctx.lineTo(cx - 12, cy - 33);
    ctx.moveTo(cx + 13, cy - 33);
    ctx.lineTo(cx + 25, cy - 28);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy + 14, 9, Math.PI * 1.08, Math.PI * 1.92);
    ctx.stroke();
  } else if (expression === "thoughtful") {
    ctx.beginPath();
    ctx.moveTo(cx - 24, cy - 31);
    ctx.lineTo(cx - 11, cy - 31);
    ctx.moveTo(cx + 12, cy - 35);
    ctx.lineTo(cx + 26, cy - 31);
    ctx.stroke();
    ctx.fillRect(cx - 9, cy + 13, 18, 3);
  } else {
    ctx.beginPath();
    ctx.moveTo(cx - 24, cy - 32);
    ctx.lineTo(cx - 10, cy - 35);
    ctx.moveTo(cx + 11, cy - 35);
    ctx.lineTo(cx + 25, cy - 32);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy + 4, 15, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
  }
  ctx.restore();
}

function drawRoad() {
  drawSidewalkBand(0, 234, W, 38, "north");
  drawSidewalkBand(0, 610, W, 96, "south");

  ctx.fillStyle = "#1f2b34";
  ctx.fillRect(0, ROAD_TOP, W, ROAD_BOTTOM - ROAD_TOP);
  ctx.fillStyle = "#d29a1f";
  ctx.fillRect(0, 438, W, 4);
  ctx.fillRect(0, 444, W, 4);
  ctx.fillStyle = "rgba(255,255,255,0.68)";
  for (let y = 350; y <= 552; y += LANE_H) {
    for (let x = 0; x < W; x += 132) {
      ctx.fillRect(x + 12, y, 44, 4);
    }
  }
  ctx.fillStyle = "#d4d4d4";
  ctx.font = "700 36px Courier New";
  ctx.fillText("←", 14, 326);
  ctx.fillText("←", W - 58, 326);
  ctx.fillText("→", 14, 488);
  ctx.fillText("→", W - 58, 488);
  drawSprite("busStop", 8, 552, 42, 96);
  drawSprite("parking", W - 50, 552, 42, 96);
}

function drawSidewalkBand(x, y, w, h, edge) {
  ctx.fillStyle = "#b8aa96";
  ctx.fillRect(x, y, w, h);
  const tileW = 52;
  const tileH = 24;
  for (let ty = y + 6, row = 0; ty < y + h - 6; ty += tileH, row += 1) {
    for (let tx = x - (row % 2) * 26; tx < x + w; tx += tileW) {
      ctx.fillStyle = row % 2 ? "#c2b39f" : "#b6a790";
      ctx.fillRect(tx + 1, ty + 1, tileW - 2, tileH - 2);
    }
  }
  ctx.fillStyle = "#a3927d";
  ctx.fillRect(x, edge === "north" ? y + h - 8 : y, w, 8);
  ctx.fillStyle = "#d0c2ad";
  ctx.fillRect(x, edge === "north" ? y : y + h - 6, w, 6);

  ctx.strokeStyle = "rgba(64, 57, 49, 0.46)";
  ctx.lineWidth = 1;
  for (let ty = y + 6; ty < y + h - 4; ty += tileH) {
    ctx.beginPath();
    ctx.moveTo(x, ty);
    ctx.lineTo(x + w, ty);
    ctx.stroke();
  }
  for (let ty = y + 6, row = 0; ty < y + h - 4; ty += tileH, row += 1) {
    for (let tx = x - (row % 2) * 26; tx < x + w; tx += tileW) {
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx, Math.min(y + h - 4, ty + tileH));
      ctx.stroke();
    }
  }

  ctx.fillStyle = "rgba(76, 70, 61, 0.24)";
  for (let sx = 18; sx < w; sx += 112) {
    ctx.fillRect(x + sx, y + 11 + ((sx / 112) % 2) * 4, 3, 3);
    ctx.fillRect(x + sx + 48, y + h - 18, 4, 3);
  }
}

function drawCars() {
  for (const car of state.cars) drawCar(car);
}

function drawBuses() {
  state.buses.forEach((bus) => drawBus(bus));
}

function drawBus(bus) {
  if (drawBusTurnSprite(bus)) return;
  ctx.save();
  ctx.translate(bus.x, bus.y);
  ctx.fillStyle = "#f0ece0";
  roundRect(0, 4, bus.w, bus.h - 8, 5, true);
  ctx.fillStyle = "#0e2935";
  ctx.fillRect(10, 12, 22, 18);
  ctx.fillRect(38, 12, 22, 18);
  ctx.fillRect(66, 12, 22, 18);
  ctx.fillRect(94, 12, 14, 18);
  ctx.fillStyle = "#ef8b22";
  ctx.fillRect(0, bus.h - 16, bus.w, 8);
  ctx.fillStyle = "#111";
  ctx.fillRect(14, bus.h - 7, 16, 8);
  ctx.fillRect(bus.w - 32, bus.h - 7, 16, 8);
  ctx.fillStyle = "#fff4c8";
  ctx.fillRect(bus.w - 4, 20, 4, 12);
  ctx.fillStyle = "#c51e1e";
  ctx.fillRect(0, 20, 4, 12);
  ctx.fillStyle = "#111";
  ctx.font = "700 14px Courier New";
  ctx.fillText("MBTA", 42, 45);
  ctx.restore();
}

function drawBusTurnSprite(bus) {
  let t = 0;
  if (bus.phase === "turning") t = easeInOut(Math.min(1, bus.age / BUS_TURN_DURATION));
  else if (bus.phase === "cruising" || bus.phase === "done") t = 1;

  const startAngle = Math.PI / 2;
  const endAngle = bus.turnDir === "right" ? 0 : Math.PI;
  const angle = lerp(startAngle, endAngle, t);
  const length = 188;
  const width = 74;
  const centerX = bus.x + bus.w / 2;
  const centerY = bus.y + bus.h / 2 + (1 - t) * 18;

  drawRotatingBusBody(centerX, centerY, length, width, angle, bus.turnDir);
  return true;
}

function drawRotatingBusBody(cx, cy, length, width, angle, turnDir) {
  ctx.save();
  ctx.translate(Math.round(cx), Math.round(cy));
  ctx.rotate(angle);

  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.fillRect(-length / 2 + 8, width / 2 - 2, length - 16, 10);

  ctx.fillStyle = "#f1eee3";
  roundRect(-length / 2, -width / 2, length, width, 5, true);
  ctx.strokeStyle = "#141414";
  ctx.lineWidth = 3;
  ctx.strokeRect(-length / 2 + 2, -width / 2 + 2, length - 4, width - 4);

  ctx.fillStyle = "#ef8b22";
  ctx.fillRect(-length / 2 + 2, width / 2 - 20, length - 4, 13);
  ctx.fillStyle = "#101820";
  for (let x = -length / 2 + 18; x < length / 2 - 44; x += 30) {
    ctx.fillRect(x, -width / 2 + 12, 22, 22);
  }
  ctx.fillRect(length / 2 - 42, -width / 2 + 10, 28, 26);

  ctx.fillStyle = "#d93022";
  ctx.fillRect(-length / 2 + 2, -14, 6, 24);
  ctx.fillStyle = "#fff2b8";
  ctx.fillRect(length / 2 - 8, -14, 6, 24);

  ctx.fillStyle = "#080808";
  ctx.fillRect(-length / 2 + 26, width / 2 - 8, 18, 12);
  ctx.fillRect(length / 2 - 48, width / 2 - 8, 18, 12);
  ctx.fillStyle = "#cfcfcf";
  ctx.fillRect(-length / 2 + 31, width / 2 - 5, 8, 6);
  ctx.fillRect(length / 2 - 43, width / 2 - 5, 8, 6);

  ctx.fillStyle = "#111";
  ctx.font = "700 14px Courier New";
  ctx.fillText("MBTA", -18, width / 2 - 24);
  ctx.fillStyle = turnDir === "right" ? "#214f7a" : "#315e34";
  ctx.fillRect(length / 2 - 64, width / 2 - 36, 34, 10);
  ctx.restore();
}

function drawCar(car) {
  if (drawDiverseVehicle(car)) return;
  if (drawVehicle(car)) return;
  ctx.save();
  ctx.translate(car.x, car.y);
  ctx.fillStyle = car.color;
  roundRect(0, 6, car.w, car.h - 6, 8, true);
  ctx.fillStyle = car.trim;
  roundRect(22, 0, car.w - 46, 28, 8, true);
  ctx.fillStyle = "#15191e";
  ctx.fillRect(32, 6, 26, 18);
  ctx.fillRect(car.w - 60, 6, 26, 18);
  ctx.fillStyle = "#d9d3c7";
  ctx.fillRect(car.dir > 0 ? car.w - 6 : 0, 24, 6, 10);
  ctx.fillStyle = "#b32018";
  ctx.fillRect(car.dir > 0 ? 0 : car.w - 6, 26, 6, 12);
  ctx.fillStyle = "#0a0a0a";
  ctx.beginPath();
  ctx.arc(26, 52, 12, 0, Math.PI * 2);
  ctx.arc(car.w - 28, 52, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#c8c8c8";
  ctx.beginPath();
  ctx.arc(26, 52, 5, 0, Math.PI * 2);
  ctx.arc(car.w - 28, 52, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDiverseVehicle(car) {
  if (!isImageReady(diverseSpriteSheet)) return false;
  const [sx, sy, sw, sh] = DIVERSE_VEHICLE_CROPS[car.spriteIndex % DIVERSE_VEHICLE_CROPS.length];
  const drawW = car.w + 18;
  const drawH = car.h + 8;
  const x = car.x - 9;
  const y = car.y - 7;
  ctx.save();
  if (car.dir < 0) {
    ctx.translate(x + drawW, y);
    ctx.scale(-1, 1);
    ctx.drawImage(diverseSpriteSheet, sx, sy, sw, sh, 0, 0, drawW, drawH);
  } else {
    ctx.drawImage(diverseSpriteSheet, sx, sy, sw, sh, x, y, drawW, drawH);
  }
  ctx.restore();
  return true;
}

function drawVehicle(car) {
  if (!USE_VEHICLE_SPRITES) return false;
  if (!isImageReady(vehicleSheet)) return false;
  const row = 0;
  const col = car.spriteIndex % VEHICLE_COLS;
  const cellW = VEHICLE_SHEET_W / VEHICLE_COLS;
  const [cx, cy, cw, ch] = VEHICLE_CROPS[col];
  const sx = col * cellW + cx;
  const sy = cy;
  const x = car.x - 8;
  const y = car.y - 9;
  const w = car.w + 16;
  const h = car.h + 10;
  ctx.save();
  if (car.dir > 0) {
    ctx.translate(x + w, y);
    ctx.scale(-1, 1);
    ctx.drawImage(vehicleSheet, sx, sy, cw, ch, 0, 0, w, h);
  } else {
    ctx.drawImage(vehicleSheet, sx, sy, cw, ch, x, y, w, h);
  }
  ctx.restore();
  return true;
}

function drawMayorPortrait(index, x, y, w, h) {
  if (!isImageReady(mayorSheet)) return false;
  const cellW = MAYOR_SHEET_W / MAYOR_CROPS.length;
  const portraitIndex = index % MAYOR_CROPS.length;
  const [cx, cy, cw, ch] = MAYOR_CROPS[portraitIndex];
  const sx = portraitIndex * cellW + cx;
  ctx.drawImage(mayorSheet, sx, cy, cw, ch, x, y, w, h);
  return true;
}

function drawAmbientPedestrians(zone) {
  if (!state.npcs) return;
  state.npcs
    .filter((npc) => npc.zone === zone)
    .forEach((npc) => {
      const bob = Math.sin(performance.now() / 260 + npc.x * 0.04) * 2;
      drawPedestrian(npc.x, npc.y + bob, npc.spriteIndex, 0.62);
    });
}

function drawMobilityActors(zone) {
  if (!state.mobilityActors) return;
  state.mobilityActors
    .filter((actor) => actor.zone === zone)
    .forEach((actor) => {
      const bob = Math.sin(actor.wobble) * (actor.type === "cyclist" ? 1.2 : 0.8);
      if (drawMobilitySprite(actor, bob)) return;
      if (actor.type === "cyclist") drawCyclist(actor.x, actor.y + bob, actor.dir, actor.spriteIndex, actor.avoid);
      else drawStrollerFamily(actor.x, actor.y + bob, actor.dir, actor.spriteIndex, actor.childIndex, actor.avoid);
    });
}

function drawMobilitySprite(actor, bob) {
  if (!isImageReady(mobilitySpriteSheet)) return false;
  const crops = MOBILITY_SPRITE_CROPS[actor.type];
  const sizes = MOBILITY_SPRITE_SIZES[actor.type];
  if (!crops || !sizes) return false;
  const variant = actor.variant % crops.length;
  const [sx, sy, sw, sh] = crops[variant];
  const [drawW, drawH] = sizes[variant];
  const yNudge = actor.type === "cyclist" ? 4 : 0;
  const drawX = actor.x - drawW / 2;
  const drawY = actor.y + bob - drawH / 2 + yNudge;
  ctx.save();
  if (actor.dir < 0) {
    ctx.translate(drawX + drawW, drawY);
    ctx.scale(-1, 1);
    ctx.drawImage(mobilitySpriteSheet, sx, sy, sw, sh, 0, 0, drawW, drawH);
  } else {
    ctx.drawImage(mobilitySpriteSheet, sx, sy, sw, sh, drawX, drawY, drawW, drawH);
  }
  ctx.restore();
  return true;
}

function drawCyclist(x, y, dir, spriteIndex, avoid) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(dir, 1);
  ctx.globalAlpha = 0.9;

  ctx.strokeStyle = "#090909";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(-24, 18, 12, 0, Math.PI * 2);
  ctx.arc(24, 18, 12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = avoid > 0.5 ? "#d8a328" : "#cfc7b5";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-24, 18);
  ctx.lineTo(-4, 0);
  ctx.lineTo(18, 18);
  ctx.lineTo(-24, 18);
  ctx.moveTo(-4, 0);
  ctx.lineTo(24, 18);
  ctx.moveTo(18, 18);
  ctx.lineTo(28, 3);
  ctx.stroke();
  ctx.fillStyle = "#111";
  ctx.fillRect(-8, -4, 18, 5);

  ctx.restore();
  const lean = dir * (avoid > 0.5 ? -5 : 0);
  drawPedestrian(x - dir * 5 + lean, y - 14, spriteIndex, 0.48);
}

function drawStrollerFamily(x, y, dir, parentIndex, childIndex, avoid) {
  const parentX = x - dir * 22;
  drawPedestrian(parentX, y - 5, parentIndex, 0.55);

  ctx.save();
  ctx.translate(x + dir * 18, y + 6);
  ctx.scale(dir, 1);
  ctx.globalAlpha = 0.94;
  ctx.strokeStyle = "#0d0d0d";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-20, -4);
  ctx.lineTo(8, -22);
  ctx.lineTo(30, -5);
  ctx.lineTo(20, 14);
  ctx.lineTo(-10, 14);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = avoid > 0.5 ? "#e2ac1f" : "#315e34";
  ctx.fill();
  ctx.fillStyle = "#d9d1be";
  ctx.fillRect(-5, -15, 24, 12);
  ctx.strokeStyle = "#111";
  ctx.beginPath();
  ctx.arc(-8, 17, 7, 0, Math.PI * 2);
  ctx.arc(20, 17, 7, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-20, -4);
  ctx.lineTo(-42, -22);
  ctx.stroke();
  ctx.restore();

  drawPedestrian(x + dir * 20, y - 4, childIndex, 0.28);
}

function drawSidewalkCrowd() {
  ctx.fillStyle = "#b2a08a";
  ctx.fillRect(0, 610, W, 96);
  ctx.fillStyle = "#8f8271";
  for (let x = 0; x < W; x += 54) ctx.fillRect(x, 648, 52, 2);

  const stores = [
    ["origination", "#8b2f25"],
    ["tikki masala", "#1f1f1b"],
    ["New Oriental House", "#e8dfc9"],
    ["THE CENTRE FOOD HUB", "#17477d"],
    ["EUGENE O'NEILL'S", "#315e34"],
  ];
  const storeW = W / stores.length;
  if (drawReference("businessFronts", 0, 704, W, 116)) {
    drawReference("avenueSign", 358, 784, 348, 39);
  } else {
  ctx.fillStyle = "#2d2420";
  ctx.fillRect(0, 706, W, 106);
  stores.forEach(([name, color], i) => {
    const x = i * storeW;
    ctx.fillStyle = color;
    if (i === 4 && drawSprite("pubSign", x + 10, 714, storeW - 20, 46)) {
      ctx.strokeStyle = "#050505";
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 6, 716, storeW - 12, 42);
    } else {
      ctx.fillRect(x + 6, 716, storeW - 12, 42);
      ctx.strokeStyle = "#050505";
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 6, 716, storeW - 12, 42);
      ctx.fillStyle = color === "#e8dfc9" ? "#8b201e" : "#f4ead8";
      drawFittedText(name, x + 24, 744, storeW - 48, 18, "700");
    }
    ctx.fillStyle = "#151819";
    for (let d = 0; d < 4; d++) ctx.fillRect(x + 28 + d * 38, 766, 24, 38);
  });
  ctx.fillStyle = "#316044";
  ctx.fillRect(358, 782, 348, 36);
  ctx.strokeStyle = "#e7e0cd";
  ctx.strokeRect(362, 786, 340, 28);
  ctx.fillStyle = "#f3ead3";
  ctx.font = "700 28px Courier New";
  ctx.fillText("HYDE PARK AVENUE", 388, 811);
  }

  for (let i = 0; i < state.remaining; i++) {
    const x = 54 + i * 74;
    const idle = Math.sin(performance.now() / 280 + i * 1.7) * 2;
    drawPedestrian(x, 650 + idle, pedestrianSpriteIndex(state.currentPed + i), 0.78);
  }
}

function drawPlayer() {
  if (state.player.invincible > 0 && Math.floor(performance.now() / 90) % 2 === 0) return;
  drawPedestrian(state.player.x + PLAYER_W / 2, state.player.y + PLAYER_H / 2, pedestrianSpriteIndex(state.currentPed), 1);
}

function drawPedestrian(cx, cy, index, scale) {
  if (drawDiversePedestrian(cx, cy, index, scale)) return;
  if (drawSprite("pedestrian", cx - 23 * scale, cy - 35 * scale, 46 * scale, 70 * scale, false, index)) return;
  const [shirt, skin] = pedestrianPalette[index % pedestrianPalette.length];
  drawPerson(cx, cy, shirt, skin, scale);
}

function pedestrianSpriteIndex(index) {
  return PEDESTRIAN_QUEUE[index % PEDESTRIAN_QUEUE.length];
}

function drawDiversePedestrian(cx, cy, index, scale) {
  if (!isImageReady(diverseSpriteSheet)) return false;
  const [sx, sy, sw, sh] = DIVERSE_PED_CROPS[index % DIVERSE_PED_CROPS.length];
  const baseH = index === 15 ? 68 : index < 4 ? 64 : 74;
  const drawH = baseH * scale;
  const drawW = drawH * (sw / sh);
  ctx.drawImage(diverseSpriteSheet, sx, sy, sw, sh, cx - drawW / 2, cy - drawH / 2, drawW, drawH);
  return true;
}

function drawPerson(cx, cy, shirt, skin, scale) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#181818";
  ctx.fillRect(-12, 18, 8, 18);
  ctx.fillRect(5, 18, 8, 18);
  ctx.fillStyle = shirt;
  ctx.fillRect(-14, -3, 28, 26);
  ctx.fillStyle = skin;
  ctx.fillRect(-10, -25, 20, 20);
  ctx.fillStyle = "#141414";
  ctx.fillRect(-11, -28, 22, 8);
  ctx.fillRect(-15, -20, 6, 12);
  ctx.fillStyle = "#0b0b0b";
  ctx.fillRect(-5, -16, 3, 3);
  ctx.fillRect(5, -16, 3, 3);
  ctx.fillRect(-4, -8, 10, 2);
  ctx.fillStyle = skin;
  ctx.fillRect(-20, 0, 7, 16);
  ctx.fillRect(13, 0, 7, 16);
  ctx.restore();
}

function drawFace(cx, cy, skin, hair) {
  ctx.fillStyle = hair;
  ctx.beginPath();
  ctx.arc(cx, cy - 4, 45, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.arc(cx, cy, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#111";
  ctx.fillRect(cx - 12, cy - 8, 5, 5);
  ctx.fillRect(cx + 8, cy - 8, 5, 5);
  ctx.fillRect(cx - 12, cy + 14, 26, 4);
  ctx.fillStyle = hair;
  ctx.fillRect(cx - 44, cy - 42, 22, 92);
  ctx.fillRect(cx + 22, cy - 42, 22, 92);
}

function drawParticles() {
  state.impacts.forEach((impact) => {
    ctx.globalAlpha = Math.max(0, impact.life);
    const size = 88 * impact.scale;
    drawSprite("burst", impact.x - size / 2, impact.y - size / 2, size, size);
  });
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#c01d1d";
  state.particles.forEach((p) => {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillRect(p.x, p.y, 5, 5);
  });
  ctx.globalAlpha = 1;
}

function drawHud() {
  ctx.fillStyle = "#050606";
  ctx.fillRect(0, HUD_TOP, W, H - HUD_TOP);
  ctx.strokeStyle = "#4a3716";
  ctx.lineWidth = 4;
  ctx.strokeRect(8, HUD_TOP + 10, W - 16, H - HUD_TOP - 20);
  ctx.fillStyle = "#cfc7b5";
  ctx.font = "700 28px Courier New";
  ctx.fillText("SCORE", 78, 862);
  ctx.fillText("PEDESTRIANS LEFT", 280, 862);
  ctx.fillText("HIGH SCORE", 628, 862);
  ctx.fillText("LEVEL", 928, 862);
  ctx.fillStyle = "#e2ac1f";
  ctx.font = "700 42px Courier New";
  ctx.fillText(String(state.score).padStart(7, "0"), 46, 904);
  ctx.fillText(String(state.highScore).padStart(7, "0"), 632, 904);
  ctx.fillText(`${state.level}-1`, 930, 904);
  for (let i = 0; i < state.remaining; i++) {
    drawPedestrian(280 + i * 33, 892, pedestrianSpriteIndex(state.currentPed + i), 0.45);
  }
}

function burst(x, y) {
  state.impacts.push({ x, y, life: 0.58, scale: 1 });
  for (let i = 0; i < 22; i++) {
    state.particles.push({
      x,
      y,
      vx: Math.cos(i) * (80 + Math.random() * 80),
      vy: Math.sin(i * 1.7) * (70 + Math.random() * 110),
      life: 0.55 + Math.random() * 0.25,
    });
  }
}

function rectsOverlap(a, b) {
  const ax = a.x + 5;
  const ay = a.y + 8;
  const aw = PLAYER_W - 10;
  const ah = PLAYER_H - 12;
  return ax < b.x + b.w && ax + aw > b.x && ay < b.y + b.h && ay + ah > b.y;
}

function isSpriteReady() {
  return spriteSheet.complete && spriteSheet.naturalWidth > 0;
}

function loadImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

function isImageReady(image) {
  return image.complete && image.naturalWidth > 0;
}

function drawReference(name, x, y, w, h) {
  const image = referenceSprites[name];
  if (!image || !isImageReady(image)) return false;
  ctx.drawImage(image, x, y, w, h);
  return true;
}

function drawReferenceCrop(name, sx, sy, sw, sh, dx, dy, dw, dh) {
  const image = referenceSprites[name];
  if (!image || !isImageReady(image)) return false;
  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  return true;
}

function drawSprite(name, x, y, w, h, flip = false, colOverride) {
  if (!isSpriteReady()) return false;
  const sprite = SPRITES[name];
  if (!sprite) return false;
  const col = colOverride ?? sprite.col ?? 0;
  const row = sprite.row ?? 0;
  const [cx, cy, cw, ch] = sprite.crops ? sprite.crops[col % sprite.crops.length] : sprite.crop;
  const sx = col * SPRITE_CELL + cx;
  const sy = row * SPRITE_CELL + cy;
  ctx.save();
  if (flip) {
    ctx.translate(x + w, y);
    ctx.scale(-1, 1);
    ctx.drawImage(spriteSheet, sx, sy, cw, ch, 0, 0, w, h);
  } else {
    ctx.drawImage(spriteSheet, sx, sy, cw, ch, x, y, w, h);
  }
  ctx.restore();
  return true;
}

function roundRect(x, y, w, h, r, fill) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  if (fill) ctx.fill();
}

function drawFittedText(text, x, y, maxWidth, baseSize, weight = "700") {
  let size = baseSize;
  do {
    ctx.font = `${weight} ${size}px Courier New`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 1;
  } while (size >= 10);
  ctx.fillText(text, x, y);
}

function drawWrappedText(text, x, y, maxWidth, lineHeight, maxLines) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  });
  if (current) lines.push(current);
  lines.slice(0, maxLines).forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
}

function drawFittedWrappedText(text, x, y, maxWidth, baseLineHeight, maxLines, baseSize, minSize = 12, weight = "700", maxHeight = null) {
  let size = baseSize;
  let lines = [];
  let lineHeight = baseLineHeight;
  while (size >= minSize) {
    ctx.font = `${weight} ${size}px Courier New`;
    lines = wrapTextLines(text, maxWidth);
    lineHeight = Math.max(minSize + 2, Math.round(baseLineHeight * (size / baseSize)));
    const textHeight = lines.length * lineHeight;
    if (lines.length <= maxLines && (!maxHeight || textHeight <= maxHeight)) break;
    size -= 1;
  }
  ctx.save();
  ctx.font = `${weight} ${Math.max(size, minSize)}px Courier New`;
  ctx.textBaseline = "top";
  lines.slice(0, maxLines).forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
  ctx.restore();
}

function wrapTextLines(text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function titleHydeRect() {
  const layout = titleImageLayout();
  return {
    x: layout.x + TITLE_HYDE_SOURCE_RECT.x * layout.scale,
    y: layout.y + TITLE_HYDE_SOURCE_RECT.y * layout.scale,
    w: TITLE_HYDE_SOURCE_RECT.w * layout.scale,
    h: TITLE_HYDE_SOURCE_RECT.h * layout.scale,
  };
}

function titleImageLayout() {
  return imageFitLayout(titleScreen, TITLE_ART_W, TITLE_ART_H);
}

function endImageLayout() {
  return imageFitLayout(endScreen, END_ART_W, END_ART_H);
}

function endMainMenuRect() {
  const layout = endImageLayout();
  return {
    x: layout.x + END_MAIN_MENU_SOURCE_RECT.x * layout.scale,
    y: layout.y + END_MAIN_MENU_SOURCE_RECT.y * layout.scale,
    w: END_MAIN_MENU_SOURCE_RECT.w * layout.scale,
    h: END_MAIN_MENU_SOURCE_RECT.h * layout.scale,
  };
}

function imageFitLayout(image, fallbackW, fallbackH) {
  const imageW = image.naturalWidth || fallbackW;
  const imageH = image.naturalHeight || fallbackH;
  const scale = Math.min(W / imageW, H / imageH);
  const w = imageW * scale;
  const h = imageH * scale;
  return {
    x: (W - w) / 2,
    y: (H - h) / 2,
    w,
    h,
    scale,
  };
}

function pointInRect(point, rect) {
  return point.x >= rect.x && point.x <= rect.x + rect.w && point.y >= rect.y && point.y <= rect.y + rect.h;
}

function canvasPoint(event) {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * W,
    y: ((event.clientY - bounds.top) / bounds.height) * H,
  };
}

function showOverlay(text, buttonText) {
  overlayText.textContent = text;
  startButton.textContent = buttonText;
  overlay.classList.remove("hidden");
}

function showBanner(text) {
  overlayText.textContent = "All clear for now.";
  startButton.textContent = text;
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  overlay.classList.add("hidden");
}

function togglePause() {
  if (!state || (state.status !== "playing" && state.status !== "paused")) return;
  if (state.status === "playing") {
    state.status = "paused";
    keys.clear();
    chipAudio.stopMusic();
  } else {
    state.status = "playing";
    chipAudio.startMusic();
  }
  updatePauseButton();
}

function updatePauseButton() {
  if (!pauseButton) return;
  const paused = Boolean(state && state.status === "paused");
  const canPause = Boolean(state && (state.status === "playing" || state.status === "paused"));
  pauseButton.classList.toggle("hidden", !canPause);
  pauseButton.textContent = paused ? "Resume" : "Pause";
  pauseButton.setAttribute("aria-pressed", paused ? "true" : "false");
  pauseButton.disabled = !canPause;
  updateTouchControls();
}

function updateTouchControls() {
  if (!touchControls) return;
  touchControls.classList.toggle("hidden", !state || state.status !== "playing");
}

function showSuccessButton() {
  if (!successButton) return;
  successButton.classList.remove("hidden");
}

function hideSuccessButton() {
  if (!successButton) return;
  successButton.classList.add("hidden");
}

function showFailureButton() {
  if (!failureButton) return;
  failureButton.classList.remove("hidden");
}

function hideFailureButton() {
  if (!failureButton) return;
  failureButton.classList.add("hidden");
}

function loop(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000 || 0);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener("keydown", (event) => {
  chipAudio.unlock();
  if (state && state.status === "title") chipAudio.startMusic("title");
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "w", "a", "s", "d", " ", "Enter", "p", "P"].includes(event.key)) {
    event.preventDefault();
  }
  if ((event.key === " " || event.key === "Enter") && state && state.status === "title") {
    resetGame();
    return;
  }
  if ((event.key === " " || event.key === "Enter") && state && state.status === "ending") {
    returnToMainMenu();
    return;
  }
  if (event.key === "p" || event.key === "P") {
    togglePause();
    return;
  }
  if (event.key === " " && state && state.status === "success") {
    completeSuccess();
    return;
  }
  if (event.key === " " && state && state.status === "failure") {
    completeFailure();
    return;
  }
  if (event.key === " " && (!state || state.status === "idle" || state.status === "over")) resetGame();
  if (state && (state.status === "paused" || state.status === "success" || state.status === "failure")) return;
  keys.add(event.key);
});

window.addEventListener("keyup", (event) => keys.delete(event.key));

window.addEventListener("pointerdown", () => {
  chipAudio.unlock();
  if (state && state.status === "title") chipAudio.startMusic("title");
});

canvas.addEventListener("pointerdown", (event) => {
  if (!state || (state.status !== "title" && state.status !== "ending")) return;
  event.preventDefault();
  chipAudio.unlock();
  const point = canvasPoint(event);
  if (state.status === "title" && pointInRect(point, titleHydeRect())) resetGame();
  if (state.status === "ending" && pointInRect(point, endMainMenuRect())) returnToMainMenu();
});

canvas.addEventListener("pointermove", (event) => {
  if (!state || (state.status !== "title" && state.status !== "ending")) {
    canvas.style.cursor = "default";
    return;
  }
  const point = canvasPoint(event);
  const hot = state.status === "title" ? pointInRect(point, titleHydeRect()) : pointInRect(point, endMainMenuRect());
  canvas.style.cursor = hot ? "pointer" : "default";
});

document.querySelectorAll("[data-dir]").forEach((button) => {
  const map = { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight" };
  const key = map[button.dataset.dir];
  const release = () => keys.delete(key);
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    chipAudio.unlock();
    if (!state || state.status !== "playing") return;
    button.setPointerCapture?.(event.pointerId);
    keys.add(key);
  });
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("lostpointercapture", release);
  button.addEventListener("pointerleave", release);
});

function bindActionButton(button, handler) {
  if (!button) return;
  let handledPointer = false;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    handledPointer = true;
    chipAudio.unlock();
    handler();
    setTimeout(() => {
      handledPointer = false;
    }, 350);
  });
  button.addEventListener("click", (event) => {
    if (handledPointer) {
      event.preventDefault();
      return;
    }
    chipAudio.unlock();
    handler();
  });
}

bindActionButton(startButton, resetGame);
bindActionButton(pauseButton, togglePause);
bindActionButton(successButton, completeSuccess);
bindActionButton(failureButton, completeFailure);

state = {
  ...buildTitleState(),
};
buildTraffic();
updatePauseButton();
hideOverlay();
hideSuccessButton();
hideFailureButton();
requestAnimationFrame(loop);
