 $(".generator").on("click", function(){
    const processor_ID = $(this).closest(".processor").attr("id")
    const computer_data_id = $(this).closest(".computer").data().id
    const bus = $(this).closest(".computer").find(".BUS").text()
    console.log(`Processor ID: ${processor_ID}\nComputer's data-id: ${computer_data_id}\nBUS: ${bus}`)
  })

  $(".validator").on("click", function(){
    const generator_text = $(this).closest(".computer").find(".generator").text()
    const MB = $(this).closest(".computer").find(".MB").text()
    const QR_1 = $(this).closest(".computer").find(".QR:first-child").text()
    const QR_2 = $(this).closest(".computer").find(".QR:nth-child(2)").text()
    console.log(`Text: ${generator_text}\nMB: ${MB}\nQR 1: ${QR_1}\nQR 2: ${QR_2}`)
  })