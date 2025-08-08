
/**
 * Manage all image sets for animations.
 * One single hub to hold an change images.
 */
export class ImgHub {

    static BACKGROUND = {
        AIR : [
            './dir/assets/img/5_background/layers/air.png'
        ],
        AIR_WIDE : './dir/assets/img/5_background/layers/air.png',
        LAYER_1 : [
            './dir/assets/img/5_background/layers/1_first_layer/1.png',
            './dir/assets/img/5_background/layers/1_first_layer/2.png'
        ],
        LAYER_1_WIDE : './dir/assets/img/5_background/layers/1_first_layer/full.png',
        LAYER_2 : [
            './dir/assets/img/5_background/layers/2_second_layer/1.png',
            './dir/assets/img/5_background/layers/2_second_layer/2.png'
        ],
        LAYER_2_WIDE : './dir/assets/img/5_background/layers/2_second_layer/full.png',
        LAYER_3 : [
            './dir/assets/img/5_background/layers/3_third_layer/1.png',
            './dir/assets/img/5_background/layers/3_third_layer/2.png'
        ],
        LAYER_3_WIDE : './dir/assets/img/5_background/layers/3_third_layer/full.png',
    } 

    static CLOUDS = [
        './dir/assets/img/5_background/layers/4_clouds/1.png',
        './dir/assets/img/5_background/layers/4_clouds/2.png'
    ];  

    static CHARACTER = {
        IDLE : [
            './dir/assets/img/2_character_pepe/1_idle/idle/I-1.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-2.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-3.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-4.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-5.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-6.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-7.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-8.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-9.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-10.png'
        ],
        LONG_IDLE : [
            './dir/assets/img/2_character_pepe/1_idle/idle/I-11.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-12.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-13.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-14.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-15.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-16.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-17.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-18.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-19.png',
            './dir/assets/img/2_character_pepe/1_idle/idle/I-20.png'
        ],
        WALK : [
            './dir/assets/img/2_character_pepe/2_walk/W-21.png',
            './dir/assets/img/2_character_pepe/2_walk/W-22.png',
            './dir/assets/img/2_character_pepe/2_walk/W-23.png',
            './dir/assets/img/2_character_pepe/2_walk/W-24.png',
            './dir/assets/img/2_character_pepe/2_walk/W-25.png',
            './dir/assets/img/2_character_pepe/2_walk/W-26.png'
        ],
        JUMP : [
            './dir/assets/img/2_character_pepe/3_jump/J-31.png',
            './dir/assets/img/2_character_pepe/3_jump/J-32.png',
            './dir/assets/img/2_character_pepe/3_jump/J-33.png',
            './dir/assets/img/2_character_pepe/3_jump/J-34.png',
            './dir/assets/img/2_character_pepe/3_jump/J-35.png',
            './dir/assets/img/2_character_pepe/3_jump/J-36.png',
            './dir/assets/img/2_character_pepe/3_jump/J-37.png',
            './dir/assets/img/2_character_pepe/3_jump/J-38.png',
            './dir/assets/img/2_character_pepe/3_jump/J-39.png'
        ],
        HURT : [
            './dir/assets/img/2_character_pepe/4_hurt/H-41.png',
            './dir/assets/img/2_character_pepe/4_hurt/H-42.png',
            './dir/assets/img/2_character_pepe/4_hurt/H-43.png'
        ],
        DEAD : [
            './dir/assets/img/2_character_pepe/5_dead/D-51.png',
            './dir/assets/img/2_character_pepe/5_dead/D-52.png',
            './dir/assets/img/2_character_pepe/5_dead/D-53.png',
            './dir/assets/img/2_character_pepe/5_dead/D-54.png',
            './dir/assets/img/2_character_pepe/5_dead/D-55.png',
            './dir/assets/img/2_character_pepe/5_dead/D-56.png',
            './dir/assets/img/2_character_pepe/5_dead/D-57.png'
        ]
    };

    static CHICKEN = {
        WALK : [
            './dir/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
            './dir/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
            './dir/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
        ],
        DEAD : [
            './dir/assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
        ]
    }

    static CHICKEN_S = {
        WALK : [
            './dir/assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
            './dir/assets/img/3_enemies_chicken/chicken_small/2_walk/2_w.png',
            './dir/assets/img/3_enemies_chicken/chicken_small/3_walk/3_w.png'
        ],
        DEAD : [
            './dir/assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
        ]
    }

    static BOSS = {
        WALK : [
            './dir/assets/img/4_enemie_boss_chicken/1_walk/G1.png',
            './dir/assets/img/4_enemie_boss_chicken/1_walk/G2.png',
            './dir/assets/img/4_enemie_boss_chicken/1_walk/G3.png',
            './dir/assets/img/4_enemie_boss_chicken/1_walk/G4.png'
        ],
        ALERT : [
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G5.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G6.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G7.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G8.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G9.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G10.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G11.png',
            './dir/assets/img/4_enemie_boss_chicken/2_alert/G12.png'
        ],
        ATTACK : [
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G13.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G14.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G15.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G16.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G17.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G18.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G19.png',
            './dir/assets/img/4_enemie_boss_chicken/3_attack/G20.png'
        ],
        HURT : [
            './dir/assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
            './dir/assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
            './dir/assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
        ],
        DEAD : [
            './dir/assets/img/4_enemie_boss_chicken/5_dead/G24.png',
            './dir/assets/img/4_enemie_boss_chicken/5_dead/G25.png',
            './dir/assets/img/4_enemie_boss_chicken/5_dead/G26.png'
        ]
    }

    static BOTTLE = {
        ROTA : [
            './dir/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
        ],
        SPLASH : [
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
            './dir/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
        ],
        GROUND : [
            './dir/assets/img/6_salsa_bottle/salsa_bottle.png',
            './dir/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
            './dir/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
        ]
    }

    static STATUS_COIN = {
        BLUE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
        ],
        GREEN : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
        ],
        ORANGE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
        ]
    }

    static STATUS_HEALTH = {
        BLUE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/blue/100.png'
        ],
        GREEN : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/green/100.png'
        ],
        ORANGE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_health/orange/100.png'
        ]
    }

    static STATUS_BOTTLE = {
        BLUE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/blue/100.png'
        ],
        GREEN : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/green/100.png'
        ],
        ORANGE : [
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/0.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/20.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/40.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/60.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/80.png',
            './dir/assets/img/7_statusbars/1_statusbar/1_statusbar_bottle/orange/100.png'
        ]
    }

    static STATUS_BOSS = {
        BLUE : [
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
        ],
        GREEN : [
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green0.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green20.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green40.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green60.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green80.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/green/green100.png'
        ],
        ORANGE : [
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
            './dir/assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
        ]
    }

    static COIN = {
        PULSE : [
            './dir/assets/img/8_coin/coin_1.png',
            './dir/assets/img/8_coin/coin_2.png',
        ]
    }

    static ICONS = {
        COIN : './dir/assets/img/7_statusbars/3_icons/icon_coin.png',
        BOSS_HEALTH : './dir/assets/img/7_statusbars/3_icons/icon_health_endboss.png',
        HEALTH : './dir/assets/img/7_statusbars/3_icons/icon_health.png',
        BOTTLE : './dir/assets/img/7_statusbars/3_icons/icon_salsa_bottle.png',
    }

    static SCENE = {
        GAME_OVER : './dir/assets/img/You won, you lost/Game_Over.png',
        WIN : './dir/assets/img/You won, you lost/You_Win_A.png',
        START : './dir/assets/img/9_intro_outro_screens/start/startscreen_1.png'
    }
}