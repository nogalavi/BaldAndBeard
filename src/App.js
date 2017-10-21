import React, {Component} from 'react';
import father from './father.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="Title">
                        <div dir="rtl" className="Title-text">קרחי העולם התפקדו!</div>
                        <div className="Shadow"/>
                    </div>
                    <img className="Image" src={father} alt="logo"/>
                </div>

                <div className="Text">

                    <div className="First-part">
                        <p dir="rtl">אהלן חברים קרחים ומזוקנים שלי. <br/>
                        קוראים לי עמית שמעוני, אני אמן בוגר  בצלאל<br/>
                        <a dir="rtl" href="https://www.shimoni-illustration.com/" target="_blank">וזה  האתר שלי.</a></p>
                    </div>

                    <div dir="rtl" className="Second-part">
                        <p dir="rtl" className="Bold-paragraph">
                            אני עובד על פרוייקט חדש ונחמד שכולו קרחות וזקנים.
                        </p>
                        <p>
                            בעקרון מדובר בפוייקט צילום פורטרטים, אבל בגלל שכולנו כאלה מדהימים יש מצב שעל הדרך נשתלט על
                            העולם.
                            אז אם גם אתם, כמוני, החלטתם לטפח את הצד החזק שלכם (ז״א שיש לכם קרחת וזקן) אני ממש אשמח
                            שתשתתפו בפרוייקט. בינתיים אתם רק צריכים להירשם ובקרוב ממש תקבלו עידכונים.
                        </p>
                        <p dir="rtl">רעיונות יתקבלו בברכה!
                        </p>
                        <p dir="rtl">*הפנייה מנוסחת בלשון זכר אבל פונה רק לגברים עם קרחת וזקן
                        </p>
                    </div>

                </div>

                <iframe className="Form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSelMsjwb02yynL5EeBKGLUEevpkByEmGVmzfKIuVhNw3pCzzw/viewform?embedded=true"
                        width="760" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...
                </iframe>
            </div>

        );
    }
}

export default App;
