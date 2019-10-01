import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';
import footer from './footerTitle.css';


function Footer() {
  return (
    <div id='footerTitle_container'> 
         <a id = "pointer" href = "#"></a>
        <div id="footerTitle">
          <div id="footerTitle_item">
            <h2><FormattedMessage id="boilerplate.components.Footer.title.ITS"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ITS.History"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ITS.Partners"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ITS.Contacts"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ITS.BoardOfHonor"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ITS.PhotoGallery"/></a>
            
        </div>
          <div id="footerTitle_item">
            <h2><FormattedMessage id="boilerplate.components.Footer.title.Entering"/></h2>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.Backa.Bakalavrat"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.Magistracy"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.PostgraduateStudy"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.Documents"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.Contacts"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Entering.Hostels"/></a>
          </div>
  

          <div id="footerTitle_item">
            <h2><FormattedMessage id="boilerplate.components.Footer.title.Kafedra"/></h2>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Kafedra.TK"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Kafedra.TC"/></a>
              <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Kafedra.ITM"/></a>
          </div>


          <div id="footerTitle_item">
          <h2><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.NTR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.NV"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.PNK"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.US"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.UK"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.MR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.ZD"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.ScienceWork.P"/></a>
          </div>

          <div id="footerTitle_item">
          <h2><FormattedMessage id="boilerplate.components.Footer.title.Learning"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.B"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.M"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.DF"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.RND"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.ADR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.G"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.SZ"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.NP"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.PP"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.P"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.PD"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Learning.PDO"/></a>
          </div>

          <div id="footerTitle_item">
          <h2><FormattedMessage id="boilerplate.components.Footer.title.Dean"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.I"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.S"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.AG"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.PZD"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.DS"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.IDF"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.Dean.IZF"/></a>
          </div>

          <div id="footerTitle_item">
          <h2><FormattedMessage id="boilerplate.components.Footer.title.CouncilOfMinisters"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.CouncilOfMinisters.SVR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.CouncilOfMinisters.PR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.CouncilOfMinisters.RVR"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.CouncilOfMinisters.NN"/></a>
          </div>

          <div id="footerTitle_item">
          <h2><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink"/></h2>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.N"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.NDI"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.Z"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.K"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.RDS"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.V"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.MNK"/></a>
            <a href = '#'><FormattedMessage id="boilerplate.components.Footer.title.UsefulLink.CS"/></a>
          </div>
        </div>
    </div>
  );
}

export default Footer;
