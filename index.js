//$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

const honestAbe = document.querySelector('#save_lincoln')
honestAbe.addEventListener('click', function(event) {
  // const intervalValue = document.querySelector('#interval').value
  // saveLincoln(parseInt(intervalValue))
  saveLincoln(parseInt(document.querySelector('#interval').value))
})


function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  var fg = document.querySelector("#foreground");
    var fadeEffect = setInterval(function () {
        if (!fg.style.opacity) {
            fg.style.opacity = 1;
        }
        if (fg.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fg.style.opacity -= 0.1;
        }
    }, interval);
}
