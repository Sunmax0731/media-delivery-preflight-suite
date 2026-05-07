import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "media-1",
  "title": "メディア納品前チェックスイート サンプル 1",
  "filePath": "samples/product.png",
  "format": "png",
  "width": 1200,
  "height": 1200,
  "deliveryPreset": "BOOTH main image"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "media-missing-required",
  "title": "必須項目不足サンプル",
  "format": "png",
  "width": 1200,
  "height": 1200,
  "deliveryPreset": "BOOTH main image"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
