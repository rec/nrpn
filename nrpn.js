autowatch = 1;

inlets = 4;
outlets = 1;

/** Accept a dial from the input. */
function msg_int(dial) {
    outlet(0, 98, 0);
    outlet(0, 99, inlet);
    outlet(0, 06, dial);
};


post('Loaded nrpn', new Date().toUTCString(), '\n');
