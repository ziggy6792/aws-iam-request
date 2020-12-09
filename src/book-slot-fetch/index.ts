const fetch = require('node-fetch');

const bookSlot = async () => {
  const response = await fetch('https://swpsystemc.youcanbook.me/Book.do', {
    headers: {
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en,en-US;q=0.9',
      'cache-control': 'max-age=0',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'sesh=Br5AYAKy; _ga=GA1.2.1799025259.1597680755; _hjid=ad8239db-0076-430f-8a16-1d80cd841003; JSESSIONID=74A3A132D09DB20E82BFE75C7B0D9595; _gid=GA1.2.336807118.1603214933; _gali=submitButton',
    },
    referrer:
      'https://swpsystemc.youcanbook.me/service/jsps/book.jsp?cal=693eae8c-0144-407d-92f2-725867e5be04&ini=1602684055670&service=jsid8744009&jumpDate=2020-10-28&slot=1604383200000',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body:
      'field4=John+Smith&field5=%2B6583631417&field5_original=83631417&field6=johnsmith21oct2020%40gmail.com&field7=&bf=true&duration=3&not-specified=Not+specified&bfd=1603214932094&cal=693eae8c-0144-407d-92f2-725867e5be04&ini=1602684055670&service=jsid8744009&jumpDate=2020-10-28&slot=1604383200000&rcfix=123',
    method: 'POST',
    mode: 'cors',
  });

  const response2 = await fetch('https://swpsystemc.youcanbook.me/Book.do', {
    headers: {
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en,en-US;q=0.9',
      'cache-control': 'max-age=0',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      cookie:
        'sesh=Br5AYAKy; _ga=GA1.2.1799025259.1597680755; _hjid=ad8239db-0076-430f-8a16-1d80cd841003; _gid=GA1.2.1914370752.1603603543; JSESSIONID=166D1102DB60AD23196E7486CFEAA0ED; _gali=submitButton',
    },
    referrer:
      'https://swpsystemc.youcanbook.me/service/jsps/book.jsp?cal=693eae8c-0144-407d-92f2-725867e5be04&ini=1603603535600&service=jsid8744009&jumpDate=2020-11-01&slot=1604455200000',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body:
      'field4=John+Smith&field5=%2B6584637251&field5_original=84637251&field6=johnsmith21oct2020%40gmail.com&field7=&g-recaptcha-response=03AGdBq24m25AF-OTT_6ip67Nm2gIuZB-OCXcgQT4UGHFin2xNXyQqgMLYblF4o7503yaNRLEGkM_7hWv8KdSi1hNuN4recwxyYQ4UaqtRsnblXJugTa3WDuf3GUagiIc69HSTeGRqobLUJ2zvMXrZ-si8S1ViLtFrcfZPuvswgl23YFnBJGuYUSH2v4PC_bqMXBMO9-PLrN5p-N5sHy3C4_F307iIsJE5NaoxSCzKDF2ep4FISFq1rhn-uwutsaaSuesPw_db2QNFg8rGGrwRT1wnxcYze56eaE6ZJoqmUhKtaDrS_foC94104WfME1NT-BzHBS40o-EqLMcYFE3FcLcsfXerVSXhow7QdRqNp7Spu29IlMDl-nJxHpfEHJnYrFi3XLq8TN2I_d-97eZIY0WW3P5S0BxVp7X-3UBGbuy3czlZVDXmIyd5OiuQSbLrU_B_vHcpfd1h&bf=true&duration=3&not-specified=Not+specified&bfd=1603603553686&cal=693eae8c-0144-407d-92f2-725867e5be04&ini=1603603535600&service=jsid8744009&jumpDate=2020-11-01&slot=1604455200000&rcfix=123',
    method: 'POST',
    mode: 'cors',
  });
  console.log({ response2 });
};

export default bookSlot;
