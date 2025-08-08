
/**
 * 
 */
export class KeyHub {

    static UP = false;      // Go Left
    static DOWN = false;    // Go Right
    static LEFT = false;    // Jump
    static RIGHT = false;   // Throw
    static SPACE = false;

    static initKeyboard(){
        window.addEventListener('keydown', (e) => {
            KeyHub.toggleKeyState({code: e.code, active: true});
        });    

        window.addEventListener('keyup', (e) => {
            KeyHub.toggleKeyState({code: e.code, active: false});
        });
    }

    static toggleKeyState({code, active} = {}) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                KeyHub.UP = active;
                break;
            case 'KeyS':
            case 'ArrowDown':
                KeyHub.DOWN = active;
                break;
            case 'KeyA':
            case 'ArrowLeft':
                KeyHub.LEFT = active;
                break;
            case 'KeyD':
            case 'ArrowRight':
                KeyHub.RIGHT = active;
                break;
            case 'Space':
                KeyHub.SPACE = active;
                break;
            default : 
                break;
        }
    }
}   