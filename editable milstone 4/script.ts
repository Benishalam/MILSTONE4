function editSection(sectionId: string): void {
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;
  
    if (sectionId === 'header') {
      const name = prompt('Enter your name:', (document.getElementById('name') as HTMLElement).innerText);
      const email = prompt('Enter your email:', (document.getElementById('email') as HTMLElement).innerText);
      const phone = prompt('Enter your phone:', (document.getElementById('phone') as HTMLElement).innerText);
      if (name) (document.getElementById('name') as HTMLElement).innerText = name;
      if (email) (document.getElementById('email') as HTMLElement).innerText = email;
      if (phone) (document.getElementById('phone') as HTMLElement).innerText = phone;
    } else if (sectionId === 'summary') {
      const summary = prompt('Edit your summary:', (document.getElementById('summary-text') as HTMLElement).innerText);
      if (summary) (document.getElementById('summary-text') as HTMLElement).innerText = summary;
    } else if (sectionId === 'experience' || sectionId === 'education') {
      const listId = sectionId + '-list';
      

        const list = document.getElementById(listId);
        if (list) {
          const listItem = document.createElement('li');

          list.appendChild(listItem);
        }
      }
    }
  