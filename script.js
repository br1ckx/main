document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim().toLowerCase();
      if (text === 'discord') {
        window.open('https://discordapp.com/users/1205559971220029490/', '_blank');
      } else if (text === 'telegram') {
        window.open('https://t.me/mrbr1ck', '_blank');
      } else if (text === 'github') {
        window.open('https://github.com/br1ckx', '_blank');
      }
    });
  });
  