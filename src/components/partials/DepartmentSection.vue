<template>
    <!-- ======= Sezione Dipartimenti ======= -->
    <section id="departments" class="departments bg-white">
        <div class="container">

            <div class="section-title">
                <h2>Dipartimenti</h2>
                <p>Scopri i nostri dipartimenti specializzati, ognuno dotato di medici altamente formati e dedicati alla tua
                    salute.</p>
            </div>

            <div class="row gy-4">
                <div class="col-lg-3">
                    <ul class="nav nav-tabs flex-column">
                        <li class="nav-item">
                            <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiologia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Neurologia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Epatologia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatria</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Oculistica</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-9">
                    <div class="tab-content">
                        <div class="tab-pane active show" id="tab-1">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Cardiologia</h3>
                                    <p class="fst-italic">I nostri specialisti in cardiologia sono formati nelle migliori
                                        università e possiedono una vasta esperienza clinica.</p>
                                    <p>I medici del dipartimento di Cardiologia sono esperti in diagnosi e trattamento delle
                                        malattie cardiovascolari, utilizzando le tecnologie più avanzate per garantire la
                                        migliore assistenza possibile ai nostri pazienti.</p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src="../../assets/images/departments-1.jpg" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab-2">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Neurologia</h3>
                                    <p class="fst-italic">I nostri neurologi sono leader nel loro campo, con formazione
                                        specifica in disturbi del sistema nervoso.</p>
                                    <p>Grazie alla loro profonda conoscenza e all'uso di tecniche diagnostiche
                                        all'avanguardia, sono in grado di offrire trattamenti personalizzati per una vasta
                                        gamma di condizioni neurologiche.</p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src="../../assets/images/departments-2.jpg" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab-3">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Epatologia</h3>
                                    <p class="fst-italic">I nostri epatologi sono riconosciuti per la loro eccellenza nella
                                        cura delle malattie del fegato.</p>
                                    <p>Specializzati in epatologia, offrono trattamenti innovativi e cure di supporto per
                                        patologie epatiche acute e croniche, lavorando in stretta collaborazione con i
                                        pazienti per gestire al meglio la loro salute.</p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src="../../assets/images/departments-3.jpg" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab-4">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Pediatria</h3>
                                    <p class="fst-italic">I nostri pediatri sono dedicati alla salute e al benessere dei
                                        bambini, dalla nascita all'adolescenza.</p>
                                    <p>Con una formazione approfondita in pediatria, i nostri medici forniscono cure
                                        eccellenti, assicurando un ambiente accogliente e rassicurante per i bambini e le
                                        loro famiglie.</p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src="../../assets/images/departments-4.jpg" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab-5">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Oculistica</h3>
                                    <p class="fst-italic">I nostri oculisti sono esperti nella cura della vista, con
                                        competenze specialistiche in chirurgia oculare.</p>
                                    <p>Offrono una gamma completa di servizi per trattare disturbi della vista e condizioni
                                        oculari, utilizzando tecnologie avanzate per esami accurati e trattamenti efficaci.
                                    </p>
                                </div>
                                <div class="col-lg-4 text-center order-1 order-lg-2">
                                    <img src="../../assets/images/departments-5.jpg" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </div>
</section><!-- Fine Sezione Dipartimenti --></template>

<script>
export default {
    name: "DepartmentSection"
}
</script>

<style lang="scss" scoped></style>