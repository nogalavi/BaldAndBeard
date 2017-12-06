import React, {Component} from 'react';
import father from './father.png';
// import father from './topsecret.png';
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
                            אני עובד על פרוייקט חדש ונחמד שכולו קרחות וזקנים*
                        </p>
                        <p>
                            בעקרון מדובר בפרוייקט צילום פורטרטים, אבל בגלל שכולנו כאלה מדהימים יש מצב שעל הדרך נשתלט על
                            העולם. <br/>
                            אז אם גם אתם, כמוני, החלטתם לטפח את הצד החזק שלכם (ז״א שיש לכם קרחת וזקן) אני ממש אשמח
                            שתשתתפו בפרוייקט.<br/> בינתיים אתם רק צריכים להירשם ובקרוב ממש תקבלו עדכונים.
                        </p>
                        <p dir="rtl">רעיונות יתקבלו בברכה!
                        </p>

                        <iframe className="Form"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSelMsjwb02yynL5EeBKGLUEevpkByEmGVmzfKIuVhNw3pCzzw/viewform?embedded=true"
                                width="760" height="1000">Loading...
                        </iframe>
                        <div className="After-form">
                            <div dir="rtl" className="Note">*הפנייה מנוסחת בלשון זכר אבל פונה רק לגברים עם קרחת וזקן
                            </div>
                            <iframe className="Facebook-share" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhairbnb.netlify.com%2F&layout=button&size=large&mobile_iframe=true&appId=891194774369127&width=73&height=28"></iframe>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;
