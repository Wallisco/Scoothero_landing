'use strict';
require('dotenv').config();
const { ensureProperties, PROPERTIES } = require('../lib/hubspot');
(async () => {
  if (!process.env.HUBSPOT_TOKEN) { console.error('HUBSPOT_TOKEN is not set.'); process.exit(1); }
  try {
    const created = await ensureProperties();
    console.log(created.length ? 'Created: ' + created.join(', ') : 'All properties already exist.');
    console.log('Total managed properties: ' + PROPERTIES.length);
  } catch (e) { console.error('Failed:', e.message); process.exit(1); }
})();
