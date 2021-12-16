---
layout: page
title: Simple Calcs
permalink: /simple-calcs/
---

<style>
    table th {
        text-align: center;
    }

    table td {
        text-align: center;
    }
</style>

<script>

    function verifyAndCalc(){
        let a = document.getElementById("a");
        let b = document.getElementById("b");
        let c = document.getElementById("c");

        if(isNaN(a.value) || isNaN(b.value) || isNaN(c.value)){
            return;
        }

        let result = ((b.value * c.value)/(a.value)).toFixed(2);

        if(isNaN(result)) document.getElementById("d").textContent = "";
        else document.getElementById("d").textContent = result;
    }
</script>

<h2>Regra de 3</h2>

<table class="table">
            <thead>
              <tr>
                <th scope="col" width="33%">A</th>
                <th scope="col" width="33%">está para</th>
                <th scope="col" width="33%">B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input id="a" oninput="verifyAndCalc();" style="width: 100%;" type="number"/></td>
                <td style="background-color: grey;"></td>
                <td><input id="b" oninput="verifyAndCalc();" style="width: 100%;" type="number"/></td>
              </tr>
            </tbody>
            <thead>
                <tr>
                  <th scope="col">C</th>
                  <th scope="col">está para</th>
                  <th scope="col">D</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td><input id="c" oninput="verifyAndCalc();" style="width: 100%;" type="number"/></td>
                  <td style="background-color: grey;"></td>
                  <td><span id="d"></span></td>
                </tr>
            </tbody>
          </table>