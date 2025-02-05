/*告訴使用者現在時間是工作天還是放假天 */
/* 練習創建 加入條件式，讓系統判斷要渲染哪個元件*/
import {useDayContext} from './DayProvider';

function CurrentMessage() {
    const {day} = useDayContext();
    const workdays = (day >= 1 && day <= 5);
    const weekends = (day === 0 || day === 6 );

    if (workdays) {
        return (<WorkDays day={day}/>)
    } else if (weekends) {
        return (<Weekends day={day}/>)
    } else {
        return (<ErrorMessage day={day}/>)
    }
}

function WorkDays(props) {
    switch (props.day) {
        case 1:
            return (<p>痛苦星期一 QQ</p>);
        case 2:
            return (<p>煎熬星期二 @@</p>);
        case 3:
            return (<p>無語星期三 O口O</p>);
        case 4:
            return (<p>希望星期四 +.+</p>);
        case 5:
            return (<p>快樂星期五 ^口^</p>);
        default:
            return (<p>這啥?!</p>);
    }
}

function Weekends(props) {
    if (props.day === 0) {
        return (<p>把握最後時光QQ</p>)
    } else if (props.day === 6) {
        return (<p>Happy!~Happy!~</p>)
    } else {
        return (<p>WTF?</p>)
    }
}

function ErrorMessage(props) {
    return (
        <p className="ErrorMessage">
            資料有誤! 資料:{props.day}
        </p>
    )
}

export default CurrentMessage;