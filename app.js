const mia = async () => {
    const miaCheck = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`she is ok`), 3000)
    });

    const miaCuteCheck = new Promise ((resolve, reject) => {
        setTimeout(() => resolve(`still cute`), 3000)
    });
    const miaStatus = () => {

    }
    await miaCheck;
    await miaCuteCheck;
    const miaResults = miaStatus();
    return miaResults
}


console.log(miaResults)