function dontclickhere() {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Esta página pode causar epilepsia e convulsões, pois apresenta vários efeitos! Esta ação não pode ser desfeita.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, tenho certeza!',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Are you sure??',
                text: "This page can cause epilepsy and seizures due to several effects! This is the second confirmation.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: '¿Seguro?',
                        text: "Esta página puede causar epilepsia y convulsiones debido a varios efectos! Esta es la tercera confirmación.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sí, estoy seguro!',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'É sério você quer continuar mesmo?',
                                text: "Esta página pode causar epilepsia e convulsões, pois apresenta vários efeitos! Esta é a última confirmação.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Sim',
                                cancelButtonText: 'Não'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.href = "./dontclickhere/pedro.html";
                                } else {
                                    Swal.fire('Você decidiu não continuar.');
                                }
                            });
                        } else {
                            Swal.fire('Você decidiu não continuar.');
                        }
                    });
                } else {
                    Swal.fire('Você decidiu não continuar.');
                }
            });
        } else {
            Swal.fire('Você decidiu não continuar.');
        }
    });
}