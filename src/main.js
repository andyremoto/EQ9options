/* Analyzed bindings: {
  "valorInvestimento": "data",
  "tempoInvestimento": "data",
  "tempos": "data",
  "opcaoCall": "data",
  "opcaoPut": "data",
  "strikePrice": "data",
  "dataExercicio": "data",
  "simularInvestimento": "options"
} */

import { ref } from "vue";

const __sfc__ = {
  data() {
    return {
      valorInvestimento: "",
      tempoInvestimento: null,
      tempos: [
        { text: "6 meses", value: 6, opcaoCallDivider: 0.016, strikePrice: 0.03 },
        { text: "12 meses", value: 12, opcaoCallDivider: 0.022, strikePrice: 0.06 },
        { text: "18 meses", value: 18, opcaoCallDivider: 0.028, strikePrice: 0.10 },
        { text: "24 meses", value: 24, opcaoCallDivider: 0.051, strikePrice: 0.35 },
        { text: "36 meses", value: 36, opcaoCallDivider: 0.061, strikePrice: 0.60 },
        { text: "60 meses", value: 60, opcaoCallDivider: 0.064, strikePrice: 1.00 },
      ],
      opcaoCall: null,
      opcaoPut: null,
      strikePrice: null,
      dataExercicio: null,
      
    };
  },
  methods: {
    simularInvestimento() {
      if (!this.valorInvestimento || !this.tempoInvestimento) {
        alert("Por favor, insira o valor do investimento e escolha o tempo de investimento.");
        return;
      }

      const selectedTempo = this.tempos.find((tempo) => tempo.value === this.tempoInvestimento);
      if (!selectedTempo) {
        alert("Tempo de investimento inválido.");
        return;
      }

      const strikePrice = selectedTempo.strikePrice;
      const currentDate = new Date();
      const dataExercicio = new Date(currentDate);
      dataExercicio.setMonth(dataExercicio.getMonth() + selectedTempo.value);

      this.opcaoCall = (this.valorInvestimento / selectedTempo.opcaoCallDivider).toFixed(2);
      this.opcaoPut = (this.opcaoCall * strikePrice).toFixed(2);
      this.strikePrice = strikePrice.toFixed(2);
      this.dataExercicio = dataExercicio.toLocaleDateString("pt-BR").slice(0, 10); // Format as DD-MM-YYYY
    },
  },
};
;
import { createElementVNode as _createElementVNode, vModelText as _vModelText, withDirectives as _withDirectives, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, vModelSelect as _vModelSelect, createCommentVNode as _createCommentVNode } from "vue"

const _hoisted_1 = { class: "app-container" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("h1", { class: "display-3 text-center my-5" }, "Simulador de Investimentos Opções Equals9 ", -1 /* HOISTED */)
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-md-6" }
const _hoisted_5 = { class: "col-md-6" }
const _hoisted_6 = ["value"]
const _hoisted_7 = /*#__PURE__*/_createElementVNode("hr", { class: "my-5" }, null, -1 /* HOISTED */)
const _hoisted_8 = { key: 0 }
const _hoisted_9 = /*#__PURE__*/_createElementVNode("h3", { class: "text-center" }, "Preço de exercício da EQ9:", -1 /* HOISTED */)
const _hoisted_10 = { class: "text-center" }
const _hoisted_11 = /*#__PURE__*/_createElementVNode("h3", { class: "text-center" }, "Data de Exercício:", -1 /* HOISTED */)
const _hoisted_12 = { class: "text-center" }
const _hoisted_13 = /*#__PURE__*/_createElementVNode("h3", { class: "text-center" }, "Opção de Venda - Valores em R$:", -1 /* HOISTED */)
const _hoisted_14 = { class: "text-center" }
const _hoisted_15 = { key: 1 }
const _hoisted_16 = /*#__PURE__*/_createElementVNode("h3", { class: "text-center" }, "Opção de Compra - Valores em EQ9:", -1 /* HOISTED */)
const _hoisted_17 = { class: "text-center" }
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("div", _hoisted_4, [
        _withDirectives(_createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.valorInvestimento) = $event)),
          type: "number",
          class: "input-box",
          placeholder: "Valor do Investimento em R$"
        }, null, 512 /* NEED_PATCH */), [
          [_vModelText, $data.valorInvestimento]
        ])
      ]),
      _createElementVNode("div", _hoisted_5, [
        _withDirectives(_createElementVNode("select", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.tempoInvestimento) = $event)),
          class: "input-box"
        }, [
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($data.tempos, (tempo) => {
            return (_openBlock(), _createElementBlock("option", {
              value: tempo.value,
              key: tempo.value
            }, _toDisplayString(tempo.text), 9 /* TEXT, PROPS */, _hoisted_6))
          }), 128 /* KEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [_vModelSelect, $data.tempoInvestimento]
        ])
      ])
    ]),
    _createElementVNode("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => ($options.simularInvestimento && $options.simularInvestimento(...args))),
      class: "btn-simular"
    }, "Simular"),
    _hoisted_7,
    ($data.opcaoCall)
      ? (_openBlock(), _createElementBlock("div", _hoisted_8, [
          _hoisted_9,
          _createElementVNode("p", _hoisted_10, "R$ " + _toDisplayString($data.strikePrice), 1 /* TEXT */),
          _hoisted_11,
          _createElementVNode("p", _hoisted_12, _toDisplayString($data.dataExercicio), 1 /* TEXT */),
          _hoisted_13,
          _createElementVNode("p", _hoisted_14, "R$ " + _toDisplayString($data.opcaoPut), 1 /* TEXT */)
        ]))
      : _createCommentVNode("v-if", true),
    ($data.opcaoPut !== null)
      ? (_openBlock(), _createElementBlock("div", _hoisted_15, [
          _hoisted_16,
          _createElementVNode("p", _hoisted_17, "Tokens: " + _toDisplayString($data.opcaoCall) + " EQ9", 1 /* TEXT */)
        ]))
      : _createCommentVNode("v-if", true)
  ]))
}
__sfc__.render = render
__sfc__.__file = "src/App.vue"
export default __sfc__