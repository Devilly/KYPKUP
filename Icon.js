import React from "react";

module.exports = React.createClass({
  render: function () {
    var svgAttributes = {
      hackernews: {
        viewBox: "0 0 400 400",
        transform: "scale(1,-1) translate(0,-400)",
        // Path taken from Ionicons' ion-social-hackernews-outline.
        d: "M352 352h-320v-320h320v320zM384 384v0v-384h-384v384h384zM233 289h45l-64 -120v-72h-40v72l-66 120h47l40 -84z"
      },
      reddit: {
        viewBox: "0 0 450 400",
        transform: "scale(1,-1) translate(0,-400)",
        // Path taken from Ionicons' ion-social-reddit-outline.
        d: "M259 160c0 21 11 31 32 31s32 -10 32 -31s-11 -32 -32 -32s-32 11 -32 32zM127 160c0 21 11 31 32 31s32 -10 32 -31s-11 -32 -32 -32s-32 11 -32 32zM449 197c0 -20 -9 -36 -27 -45c1 -5 1 -9 1 -14c0 -38 -19 -71 -58 -98s-85 -40 -140 -40s-102 13 -141 40s-58 59 -58 97c0 5 0 10 1 15c-18 9 -27 24 -27 45c0 14 5 25 15 35s21 15 35 15c13 0 24 -4 33 -13c36 25 79 39 129 41h7l29 98l86 -17c8 19 21 28 41 28c12 0 22 -4 31 -13s13 -20 13 -32s-4 -23 -13 -32s-19 -13 -31 -13s-23 4 -32 13s-13 19 -13 31l-69 14l-24 -77 c50 -2 94 -16 129 -41c10 9 21 13 34 13c9 0 16 -3 24 -7s14 -10 18 -18s7 -16 7 -25zM375 366c-4 0 -8 -1 -11 -2s-6 -4 -8 -6s-5 -6 -6 -9s-2 -6 -2 -10c0 -8 3 -14 8 -19s12 -8 19 -8c5 0 9 1 13 3s8 6 10 10s4 9 4 14c0 8 -3 14 -8 19s-12 8 -19 8zM18 197 c0 -11 5 -20 14 -27c7 19 19 37 37 53c-6 4 -12 6 -19 6c-3 0 -7 0 -10 -1s-6 -3 -9 -5s-5 -4 -7 -7s-4 -6 -5 -9s-1 -6 -1 -10zM355 55c34 23 50 51 50 83v9c-1 6 -3 12 -5 18c-6 16 -15 30 -30 43c-5 4 -10 9 -15 12v0c-36 25 -79 37 -130 37s-95 -12 -131 -37v0 c-5 -3 -10 -8 -15 -12c-15 -13 -24 -27 -30 -43c-2 -6 -4 -12 -5 -18v-9c0 -32 16 -60 50 -83c36 -25 80 -37 131 -37s94 12 130 37zM417 170c9 6 14 16 14 27c0 9 -3 17 -9 23s-13 9 -22 9c-7 0 -14 -2 -20 -6c18 -16 30 -34 37 -53zM289 90l13 -12 c-20 -20 -45 -30 -77 -30s-58 10 -78 30l13 12c16 -16 38 -24 65 -24s48 8 64 24z"
      }
    }[this.props.source];

    return (
      <svg viewBox={svgAttributes.viewBox} style={{ width: 16, height: 16 }}>
        <path transform={svgAttributes.transform} d={svgAttributes.d} />
      </svg>
    );
  }
});