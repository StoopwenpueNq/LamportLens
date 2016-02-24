# Changelog

All notable changes to LamportLens are documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Rule wording is being reviewed for the next patch.

## [1.0.0] - 2026-06-02

### Added

- Stable contract: exit codes 0, 1 and 2, and the written format contract in
  `docs/FORMAT.md`.
- Default rate updated to the SIMD-0437-1 step, 6,333 lamports per byte.

## [0.9.0] - 2025-07-15

### Added

- A second implementation in the parity scripts, compared on every fixture.
- `scripts/parity.py` comparing the two engines on every fixture.

## [0.8.0] - 2024-06-11

### Added

- Executable program accounts are classified as `executable-excluded` and left
  out of bands, totals and owner locked sums.

## [0.7.0] - 2023-05-09

### Added
