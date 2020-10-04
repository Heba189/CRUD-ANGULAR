import { state, style, trigger } from '@angular/animations';

export const toggleFade = trigger('MyFade',[
    state('login',style({
        opacity:1 , backgroundColor:'green',
       

    })),
    state('logout',style({
        opacity:.7 , backgroundColor:'yellow'
    }))
])

