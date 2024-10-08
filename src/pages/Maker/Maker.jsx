import { Formik } from "formik";
import React, { useState } from "react";
import './Maker.css';
import Axios from "axios";
import LogoimgTM from '../../assets/imagens/logOtesteMaker.png';
import DropIcon from '../../assets/imagens/drop_down_file_icon.png';

const Maker = () => {
  const [questionCount, setQuestionCount] = useState(0);

  const increaseCount = () => setQuestionCount(questionCount + 1);
  const decreaseCount = () => setQuestionCount(Math.max(questionCount - 1, 0));

  return (
    <div className="super-all-container">
      <div className="container_branding">
        <div id="logo_tm">
          <img src={LogoimgTM} alt="Logo Test maker" />
        </div>
        <h1>Test Maker</h1>
      </div>
      <form id="contact-form">
        <div className="container_apr">
          <p id="Bem_vindo">
            Bem vindo! você já pode começar a criar seu formulário. Comece
            selecionando a matéria.
          </p>
        </div>

        <hr className="corte-esctreito" />

        <div id="container_upload_select">
          <div className="container_file_upload">
            <div>
              <h2>Tipo de arquivo</h2>
            </div>
            <div className="file_desc">
              <p>
                Selecione o tipo de arquivo e arraste o documento para a janela
              </p>
            </div>
            <div className="file_icons">
              <div className="Container_file_icons">
                <i className="bi bi-pencil-fill" id="pencil_icon"></i>
              </div>
              <div className="Container_file_icons">
                <i className="bi bi-play-circle-fill" id="playIcon"></i>
              </div>
              <div className="Container_file_icons">
                <i className="bi bi-link-45deg" id="file_icon"></i>
              </div>
              <div className="Container_file_icons">
                <i className="bi bi-paperclip" id="paperclip_icon"></i>
              </div>
            </div>
          </div>
          <div>
            <h2>Tipo de questão</h2>
            <div className="container_Tipo">
              <div className="container_sep2">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox1"
                    id="checkbox01"
                    name="question-type"
                    value="multiple-choice"
                  />
                  <span className="checkbox-custom"></span>
                  <label for="checkbox1">Múltipla escolha</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox1"
                    id="checkbox02"
                    name="question-type"
                    value="short-answer"
                  />
                  <span className="checkbox-custom"></span>
                  <label for="checkbox2">Resposta curta</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox1"
                    id="checkbox03"
                    name="question-type"
                    value="paragraph"
                  />
                  <span className="checkbox-custom"></span>
                  <label for="checkbox3">Parágrafo</label>
                </div>
              </div>

              <div className="container_sep1">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox1"
                    id="checkbox04"
                    name="question-type"
                    value="checkbox"
                  />
                  <span className="checkbox-custom"></span>
                  <label for="checkbox4">Caixa de seleção</label>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox1"
                    id="checkbox05"
                    name="question-type"
                    value="checkbox"
                  />
                  <span className="checkbox-custom"></span>
                  <label for="checkbox5">Caixa de seleção</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Container_drop">
          <div className="container_drop_img">
            <img
              src={DropIcon}
              alt="selecione e coloque aqui o arquivo"
            />
          </div>
          <div className="drop_down_inst_container">
            <h3>ARRASTE OS ARQUIVOS AQUI</h3>
            <p>Podem ser colocados aqui arquivos .PDF .PPTX</p>
          </div>
        </div>

        <div className="container_info">
          <div className="Grade_group">
            <input
              type="text"
              id="exam-year"
              name="exam-year"
              placeholder="Para que ano se aplica a prova? (Define a dificuldade)"
            />
          </div>
          <div className="quantity_questions">
            <p>N° de questões</p>
            <div className="menos_mais">
              <button id="mais" type="button" onClick={increaseCount}>
                +
              </button>
              <div className="container_contagem">
                <p id="contagem">{questionCount}</p>
              </div>
              <button id="menos" type="button" onClick={decreaseCount}>
                -
              </button>
            </div>
          </div>
        </div>
        <button id="generate" type="submit">
          GERAR
        </button>
      </form>
    </div>
  );
};

export default Maker;
