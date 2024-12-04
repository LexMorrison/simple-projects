export default async function getCurrency(baseCurrency) {
  try {
    const responce = await fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hmJbDrH4GvmwYMS49S2vQXIOCX7TRkw83XBKLH04&base_currency=${baseCurrency}`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
}
