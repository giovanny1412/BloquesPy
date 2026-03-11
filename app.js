// Inyectar Blockly en el contenedor
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});

// Lógica de conexión y carga
document.getElementById('btnConectar').addEventListener('click', async () => {
    try {
        // Solicitar acceso al puerto serial
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        
        const writer = port.writable.getWriter();
        const encoder = new TextEncoder();
        
        // Generar código Python desde los bloques
        let code = Blockly.Python.workspaceToCode(workspace);
        
        // Crear el comando para escribir en main.py y reiniciar
        const script = `f=open('main.py','w')\nf.write('''${code}''')\nf.close()\nimport machine\nmachine.reset()\n`;
        
        // Enviar a la ESP32
        await writer.write(encoder.encode(script));
        
        writer.releaseLock();
        alert("✅ Código cargado con éxito en la memoria de la ESP32.");
    } catch (error) {
        console.error("Error al conectar:", error);
        alert("❌ Error: Asegúrate de usar Chrome o Edge y tener la placa conectada.");
    }
});