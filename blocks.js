Blockly.defineBlocksWithJsonArray([
  // 1. BLOQUE DE EVENTO (AL INICIAR)
  {
    "type": "al_iniciar",
    "message0": "Al Iniciar el Carrito %1 %2",
    "args0": [{ "type": "input_dummy" }, { "type": "input_statement", "name": "STACK" }],
    "colour": 20,
    "tooltip": "Configura los motores y repite las acciones por siempre."
  },
  // 2. BLOQUE DE MOVIMIENTO POR TIEMPO
  {
    "type": "mover_tiempo",
    "message0": "Mover %1 por %2 segundos",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DIR",
        "options": [
          ["Adelante", "forward"], ["Atrás", "backward"],
          ["Derecha", "right"], ["Izquierda", "left"]
        ]
      },
      { "type": "field_number", "name": "SECONDS", "value": 1, "min": 0, "precision": 0.1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  // 3. BLOQUE DE BUCLE
  {
    "type": "repetir_patrulla",
    "message0": "Repetir %1 veces",
    "args0": [{ "type": "field_number", "name": "TIMES", "value": 3, "min": 1 }],
    "message1": "hacer %1",
    "args1": [{ "type": "input_statement", "name": "DO" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  // 4. BLOQUE DE SENSOR
  {
    "type": "si_obstaculo",
    "message0": "Si distancia menor a %1 cm",
    "args0": [{ "type": "field_number", "name": "DIST", "value": 15 }],
    "message1": "entonces %1",
    "args1": [{ "type": "input_statement", "name": "DO" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  }
]);