import React, { Component } from 'react';
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
          <p dir="rtl">אהלן חברים קרחים ומזוקנים שלי.
              קוראים לי עמית שמעוני ואני אמן בוגר בצלאל.
              לינק לאתר.
          </p>
          <p dir="rtl">אני עובד על פרוייקט חדש ונחמד שכולו קרחות וזקנים.
              בעקרון מדובר בפוייקט צילום פורטרטים, אבל בגלל שכולנו כאלה מדהימים יש מצב שעל הדרך נשתלט על העולם.
              אז אם גם אתם, כמוני, החלטתם לטפח את הצד החזק שלכם (ז״א שיש לכם קרחת וזקן) אני ממש אשמח שתשתתפו בפרוייקט. בינתיים אתם רק צריכים להירשם ובקרוב ממש תקבלו עידכונים.</p>
          <p dir="rtl">רעיונות יתקבלו בברכה!
          </p>
          <p dir="rtl">*הפנייה מנוסחת בלשון זכר אבל פונה רק לגברים עם קרחת וזקן
          </p>
      </div>
      <iframe className="Form" src="https://docs.google.com/forms/d/e/1FAIpQLSelMsjwb02yynL5EeBKGLUEevpkByEmGVmzfKIuVhNw3pCzzw/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>      </div>
    );
  }
}

export default App;
