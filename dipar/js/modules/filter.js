'use strict';

(function() {

    //shank
    if (document.getElementById('html5-shank')) {
        var shankSelect = document.getElementById('shank-input-select');
        var shankhtml5Slider = document.getElementById('html5-shank');
        noUiSlider.create(shankhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var shankInputNumber = document.getElementById('shank-input-number');
        shankhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                shankInputNumber.value = 'до '+value+'мм';
            } else {
                shankSelect.value = 'от '+value+'мм';
            }
        });
        shankSelect.addEventListener('change', function () {
            shankhtml5Slider.noUiSlider.set([this.value, null]);
        });
        shankInputNumber.addEventListener('change', function () {
            shankhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //cutter-d
    if (document.getElementById('html5-cutter-d')) {
        var cutterDSelect = document.getElementById('cutter-d-input-select');
        var cutterDhtml5Slider = document.getElementById('html5-cutter-d');
        noUiSlider.create(cutterDhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var cutterDInputNumber = document.getElementById('cutter-d-input-number');
        cutterDhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                cutterDInputNumber.value = 'до '+value+'мм';
            } else {
                cutterDSelect.value = 'от '+value+'мм';
            }
        });
        cutterDSelect.addEventListener('change', function () {
            cutterDhtml5Slider.noUiSlider.set([this.value, null]);
        });
        cutterDInputNumber.addEventListener('change', function () {
            cutterDhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //cutter-w
    if (document.getElementById('html5-cutter-w')) {
        var cutterWSelect = document.getElementById('cutter-w-input-select');
        var cutterWhtml5Slider = document.getElementById('html5-cutter-w');
        noUiSlider.create(cutterWhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var cutterWInputNumber = document.getElementById('cutter-w-input-number');
        cutterWhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                cutterWInputNumber.value = 'до '+value+'мм';
            } else {
                cutterWSelect.value = 'от '+value+'мм';
            }
        });
        cutterWSelect.addEventListener('change', function () {
            cutterWhtml5Slider.noUiSlider.set([this.value, null]);
        });
        cutterWInputNumber.addEventListener('change', function () {
            cutterWhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }
    

    //tooth-n
    if (document.getElementById('html5-tooth-n')) {
        var toothSelect = document.getElementById('tooth-input-select');
        var toothhtml5Slider = document.getElementById('html5-tooth-n');
        noUiSlider.create(toothhtml5Slider, {
            start: [10, 30],
            connect: true,
            range: {
                'min': 0.05,
                'max': 50
            }
        });
        var toothInputNumber = document.getElementById('tooth-input-number');
        toothhtml5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle) {
                toothInputNumber.value = 'до '+value+'мм';
            } else {
                toothSelect.value = 'от '+value+'мм';
            }
        });
        toothSelect.addEventListener('change', function () {
            toothhtml5Slider.noUiSlider.set([this.value, null]);
        });
        toothInputNumber.addEventListener('change', function () {
            toothhtml5Slider.noUiSlider.set([null, this.value]);
        });
    }

    if(document.querySelector(".filter")) {
        document.querySelector(".filter").addEventListener('click', function (e){
            if (e.target.classList.contains('filter__block-title')) {
                if (e.target.parentNode.querySelector('.filter__wrapper').classList.contains('hidden')) {
                    e.target.parentNode.querySelector('.filter__wrapper').classList.remove('hidden');
                } else {
                    e.target.parentNode.querySelector('.filter__wrapper').classList.add('hidden');
                }
                
            }
        })
    }
    
})();