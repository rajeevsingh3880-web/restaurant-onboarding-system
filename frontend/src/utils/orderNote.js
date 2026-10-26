const ORDER_NOTE_KEYS = [
  'customerRequest',
  'customer_request',
  'customerNote',
  'customer_note',
  'customerInstructions',
  'customer_instructions',
  'note',
  'notes',
  'specialNote',
  'special_note',
  'specialInstruction',
  'special_instruction',
  'specialInstructions',
  'special_instructions',
  'instruction',
  'instructions',
  'orderNote',
  'order_note',
  'orderNotes',
  'order_notes',
  'kitchenNote',
  'kitchen_note',
  'kitchenInstructions',
  'kitchen_instructions',
  'comment',
  'comments',
  'remarks',
  'internalNote',
  'internal_note'
];

export function getOrderNote(order) {
  if (!order) return '';

  return [...new Set(
    ORDER_NOTE_KEYS
      .map(key => order[key])
      .filter(value => typeof value === 'string')
      .map(value => value.trim())
      .filter(Boolean)
  )].join('\n');
}
