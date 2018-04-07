

var Qs = ["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"];
var visibleQId = null;
function toggleQVisibility(QId) {
  if(visibleQId === QId) {
    //visibleDivId = null;
  } else {
    visibleQId = QId;
  }
  hideNonVisibleQs();
}

function hideNonVisibleQs() {
  var i, QId, q;
  for(i = 0; i < Qs.length; i++) {
    QId = Qs[i];
    q = document.getElementById(QId);
    if(visibleQId === QId) {
      q.style.display = "block";
    } else {
      q.style.display = "none";
    }
  }
}

var Bs = ["B1", "B2", "B3","B4","B5","B6","B7","B8","B9","B10","B11", "B12", "B13","B14","B15","B16","B17","B18","B19","B20","B21","send-header"];
var visibleBId = null;
function toggleBVisibility(BId) {
  if(visibleBId === BId) {
    //visibleDivId = null;
  } else {
    visibleBId = BId;
  }
  hideNonVisibleBs();
}

function hideNonVisibleBs() {
  var i, BId, b;
  for(i = 0; i < Bs.length; i++) {
    BId = Bs[i];
    b = document.getElementById(BId);
    if(visibleBId === BId) {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  }
}
