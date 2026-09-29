(function(){
  var answers = {
    customers:"Lead generation and paid acquisition, set up so every inquiry is traceable to the ad, page or post that produced it.",
    visibility:"Local SEO, Google Business Profile and the technical work that gets your pages indexed, ranked and clicked.",
    website:"A site designed around one conversion goal per page — fast on a phone and obvious to contact from."
  };
  var ans = document.getElementById('goalAnswer');
  var goals = [].slice.call(document.querySelectorAll('.goal'));
  goals.forEach(function(b){
    b.addEventListener('click', function(){
      goals.forEach(function(x){ x.setAttribute('aria-pressed','false'); });
      b.setAttribute('aria-pressed','true');
      ans.textContent = answers[b.dataset.goal] || '';
    });
  });

  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  tabs.forEach(function(t){
    t.addEventListener('click', function(){
      tabs.forEach(function(x){
        x.setAttribute('aria-selected','false');
        var p = document.getElementById(x.getAttribute('aria-controls'));
        if(p) p.hidden = true;
      });
      t.setAttribute('aria-selected','true');
      var pan = document.getElementById(t.getAttribute('aria-controls'));
      if(pan) pan.hidden = false;
    });
  });

  var sale = document.getElementById('avgSale');
  var cust = document.getElementById('addCust');
  var big  = document.getElementById('calcOut');
  var money = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
  function num(v){ return Math.max(0, Number(String(v).replace(/[^0-9.]/g,'')) || 0); }
  function recalc(){ big.textContent = money.format(num(sale.value) * num(cust.value)); }
  sale.addEventListener('input', recalc);
  cust.addEventListener('input', recalc);
  sale.addEventListener('blur', function(){ sale.value = money.format(num(sale.value)); });
  recalc();

  document.querySelectorAll('.cp').forEach(function(btn){
    btn.addEventListener('click', function(){
      var el = document.getElementById(btn.dataset.copy);
      if(!el) return;
      function flash(txt){ var o = 'Copy'; btn.textContent = txt; btn.classList.add('ok');
        setTimeout(function(){ btn.textContent = o; btn.classList.remove('ok'); }, 1500); }
      function pick(){
        try{ var r=document.createRange(); r.selectNodeContents(el);
          var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); flash('Selected'); }catch(e){}
      }
      try{ navigator.clipboard.writeText(el.textContent.trim()).then(function(){ flash('Copied'); }, pick); }
      catch(e){ pick(); }
    });
  });
})();
