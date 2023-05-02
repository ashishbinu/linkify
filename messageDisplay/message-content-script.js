import Autolinker from 'autolinker';

document.body.innerHTML = Autolinker.link(document.body.innerHTML, {
  stripPrefix: {
    scheme: false,
    www: true,
  }
});
