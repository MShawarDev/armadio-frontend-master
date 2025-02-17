export const webTrakingTag = () => {

  if (typeof CS_CONF === 'undefined') {
    window._uxa?.push(['setPath', window.location.pathname + window.location.hash.replace('#', '?__') ?? '']);
    var mt = document.createElement("script");
    mt.type = "text/javascript";
    mt.async = true;
    mt.src = "//t.contentsquare.net/uxa/299024f3b19dc.js";
    document.getElementsByTagName("head")[0].appendChild(mt);
  }
  else {

    window._uxa?.push(['trackPageview', window.location.pathname + window.location.hash.replace('#', '?__') ?? '']);
  }
};


export const ecommerceWebTrakingTag = (invoiceID,totalAmount,currency) => {

  window._uxa = window._uxa || [];

  // Push transaction info into CS global object
  window._uxa.push(['ec:transaction:create', {
    'id': invoiceID, /* Transaction ID (string, up to 40 characters) */
    'revenue': totalAmount, /* Transaction's total amount paid (integer or string, up to 12 digits and 2 decimals - extra decimals are truncated) */
    'currency': currency /* Currency value (string - numeric or alphanumeric ISO 4217 value) (optional) */
  }]);

  // Send the information to Contentsquare
  window._uxa.push(['ec:transaction:send']);

};

export const SteeperTrakingTag = (trakPageview) => {

    window._uxa = window._uxa || [];
    window._uxa.push(['trackPageview',window.location.pathname + window.location.hash.replace('#', '?__') + '/' + trakPageview]);
  
};


