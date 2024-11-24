function editSection(sectionId) {
    var sectionElement = document.getElementById(sectionId);
    if (!sectionElement)
        return;
    if (sectionId === 'header') {
        var name_1 = prompt('Enter your name:', document.getElementById('name').innerText);
        var email = prompt('Enter your email:', document.getElementById('email').innerText);
        var phone = prompt('Enter your phone:', document.getElementById('phone').innerText);
        if (name_1)
            document.getElementById('name').innerText = name_1;
        if (email)
            document.getElementById('email').innerText = email;
        if (phone)
            document.getElementById('phone').innerText = phone;
    }
    else if (sectionId === 'summary') {
        var summary = prompt('Edit your summary:', document.getElementById('summary-text').innerText);
        if (summary)
            document.getElementById('summary-text').innerText = summary;
    }
    else if (sectionId === 'experience' || sectionId === 'education') {
        var listId = sectionId + '-list';
        var list = document.getElementById(listId);
        if (list) {
            var listItem = document.createElement('li');
            list.appendChild(listItem);
        }
    }
}
