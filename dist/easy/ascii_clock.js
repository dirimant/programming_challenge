"use strict";
function numberToDigit(value) {
    switch (value) {
        case '0':
            return [" __ ", "|  |", "|__|"];
        case '1':
            return ["    ", "   |", "   |"];
        case '2':
            return [" __ ", " __|", "|__ "];
        case '3':
            return [" __ ", " __|", " __|"];
        case '4':
            return ["    ", "|__|", "   |"];
        case '5':
            return [" __ ", "|__ ", " __|"];
        case '6':
            return [" __ ", "|__ ", "|__|"];
        case '7':
            return [" __", "   |", "   |"];
        case '8':
            return [" __ ", "|__|", "|__|"];
        case '9':
            return [" __ ", "|__|", " __|"];
        case ':':
            return ["   ", " · ", " · "];
        default:
            return [];
    }
}
/**
     *
     * @return Array = ['Hours', 'Minutes', 'Seconds']
     *
     */
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return '' + hours + ':' + minutes + ':' + seconds;
}
function renderClock(clockString) {
    let clockStringSplited = clockString.split('');
    if (true) {
        let renderedClock = [];
        let upperString = '', middleString = '', downString = '';
        for (let i = 0; i < clockStringSplited.length; i++) {
            renderedClock[i] = numberToDigit(clockStringSplited[i]);
        }
        for (let i = 0; i < renderedClock.length; i++) {
            for (let x = 0; x < 3; x++) {
                if (x == 0)
                    upperString = upperString.concat(renderedClock[i][x]);
                if (x == 1)
                    middleString = middleString.concat(renderedClock[i][x]);
                if (x == 2)
                    downString = downString.concat(renderedClock[i][x]);
            }
        }
        return upperString + '\n' + middleString + '\n' + downString;
        // HTML NOT IMPLEMENTED
        //return `<p>${upperString}</p></br><p>${middleString}</p></br><p>${downString}</p></br>`;
    }
    else // TODO : Handle cache
     {
    }
}
function digitsClock() {
    console.clear();
    console.log(renderClock(getCurrentTime()));
}
setInterval(digitsClock, 1000);
