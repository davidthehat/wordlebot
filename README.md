# wordlebot
Small project with the main goal of writing a js bookmarklet that can play wordle on its own.

To use, drag the following link to your bookmark bar, navigate to Wordle, and click the bookmark!

[Drag Me!](javascript:(function()%7Bfunction%20callback()%7Bfunction%20e()%7B%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.src%3D%22https%3A%2F%2Fdavidthehat.github.io%2Fwordlebot%2Fdocs%2Ffile.js%22%2Cdocument.body.appendChild(t)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Faxios%2Fdist%2Faxios.min.js%22%2Cdocument.body.appendChild(s)%3B%7D)())
