$(document).ready(function () {
  let produk = [
    {
      nama_produk: "Jet Tempur",
      total: 10,
    },
    {
      nama_produk: "Nuklir Hiroshima",
      total: 1,
    },
    {
      nama_produk: "Infinity Stone",
      total: 6,
    },
    {
      nama_produk: "Burj Khalifa",
      total: 5,
    },
    {
      nama_produk: "Rudal Hipersonik",
      total: 3,
    },
  ];
  let order = "";
  let sum = 1;
  let produk2 = ["Jet Tempur", "Nuklir Hiroshima", "Infinity Stone", "Burj Khalifa", "Rudal Hipersonik"];

  $("#produk" + sum).on("change", function () {
    $("#button-tambah").show();
  });
  $("#button-tambah").on("click", function () {
    let total_iterasi = produk.findIndex((element) => element.nama_produk === $("#produk" + sum).val());

    if ($("#total" + sum).val() <= produk[total_iterasi].total) {
      order += "<li>" + $("#produk" + sum).val() + " (" + $("#total" + sum).val() + ")</li>";
      produk2.splice(produk2.indexOf($("#produk" + sum).val()), 1);
      sum++;

      if (produk2.length > 0) {
        let a = `<div class="col-md-5"><label for="produk${sum}" class="form-label">produk</label><select name='produk${sum}' id='produk${sum}' class="form-select" required><option value="">Pilih produk</option>`;
        produk2.forEach((element) => {
          a += `<option>${element}</option>`;
        });
        a += `</select></div><div class="col-md-5"><label for='total${sum} class="form-label"'>Jumlah</label><input class="form-control" id='total${sum}' type='number' required /><div>`;
        $(this).before(a);
      }

      if (produk2.length <= 1) {
        $("#button-tambah");
      }

    } else {
      alert(`Maaf, jumlah produk tidak mencukupi. Jumlah ${$("#produk" + sum).val()} =  ${produk[total_iterasi].total} `);
    }

  });

  $("#button-pesan").on("click", function () {
    let total_iterasi = produk.findIndex((element) => element.nama_produk === $("#produk" + sum).val());
    if ($("#total" + sum).val() <= produk[total_iterasi].total) {
      order += "<li>" + $("#produk" + sum).val() + " (" + $("#total" + sum).val() + ")</li>";
      $(".pesan_produk").html(`<h2 class="card-title">${$("#nama_produk").val()}</h2><br><ul>${order}</ul>`);
    } else {
      alert(`Maaf, jumlah produk tidak mencukupi. Jumlah ${$("#produk" + sum).val()} =  ${produk[total_iterasi].total} `);
    }

  });

});