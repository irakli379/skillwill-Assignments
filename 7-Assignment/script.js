// then/catch სინტაქსი
function mySetTimeout(delayInSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayInSeconds * 1000);
  });
}

function makeToys(del) {
  return mySetTimeout(del).then(() => {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Undefected");
      } else {
        reject("Defected");
      }
    });
  });
}

function deliverToys(delay) {
  return mySetTimeout(delay).then(() => {
    return makeToys(1)
      .then((res) => `Delivered ${res}`)
      .catch((err) => `Delivery failed: ${err}`);
  });
}

function sellToys(delay) {
  return mySetTimeout(delay).then(() => {
    return deliverToys(1)
      .then((res) => {
        return res === "Delivered Undefected"
          ? `sold ${res}`
          : `not sold ${res}`;
      })
      .catch((err) => `not sold ${err}`);
  });
}

// async/await სინტაქსი
async function makeToysAsync(del) {
  await mySetTimeout(del);
  return await new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Undefected");
    } else {
      reject("Defected");
    }
  });
}

async function deliverToysAsync(delay) {
  await mySetTimeout(delay);
  try {
    const res = await makeToysAsync(1);
    return `Delivered ${res}`;
  } catch (err) {
    return `Delivery failed: ${err}`;
  }
}

async function sellToysAsync(delay) {
  await mySetTimeout(delay);
  try {
    const res = await deliverToysAsync(1);
    return res === "Delivered Undefected" ? `sold ${res}` : `not sold ${res}`;
  } catch (err) {
    return `not sold ${err}`;
  }
}
