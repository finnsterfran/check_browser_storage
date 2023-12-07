if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage
    .estimate()
    .then(({usage, quota}) => {
        const something = document.getElementById("something");
        something.innerHTML = `
        <p>Using ${(usage / quota * 100).toFixed(2)} % out of ${(quota / 1024 / 1024 / 1024).toFixed(2)} GB.</p>`;
    }).catch(error => {
        console.error("Error: ", error);
    });
  }


