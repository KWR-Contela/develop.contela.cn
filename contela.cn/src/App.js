import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Layout from './components/layout/Layout';
import Organization from './components/organization/Organization';
import Documentation from './components/documentation/Documentation';
import CNCR from './components/documentation/reference/cncr/CNCR';
import InitPCSetup from './components/documentation/reference/init_pc_setup/Init_PC_Setup';
import EmsApi from './components/documentation/ems_api/EmsApi';
import DocLayout from './components/documentation/doc_layout/DocLayout';

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Section1 />
        <Section2 />
      </Layout>
    </div>
  )
}

const OrgHome = () => {
  return (
    <div>
      <Layout>
          <Routes>
            <Route path="/" element={<Organization />} /> 
          </Routes>
      </Layout>
    </div>
  )
}

const DocHome = () => {
  return (
    <div>
      <DocLayout>
        <Routes>
          <Route path="/" element={<Documentation />} /> 
        </Routes>
      </DocLayout>
    </div>
  )
}

const DocApiEmsPcfHome = () => {
  return (
    <div>
      <DocLayout>
        <Routes>
          <Route path="/" element={<EmsApi />} />
        </Routes>
      </DocLayout>
    </div>
  )
}

const DocPcSetupHome = () => {
  return (
    <div>
      <DocLayout>
        <Routes>
          <Route path="/" element={<InitPCSetup />} />
        </Routes>
      </DocLayout>
    </div>
  )
}

const DocCncrHome = () => {
  return (
    <div>
      <DocLayout>
        <Routes>
          <Route path="/" element={<CNCR />} />
        </Routes>
      </DocLayout>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/organization" element={<OrgHome />} /> 
        <Route path="/documentation" element={<DocHome />} /> 
        <Route path="/documentation/api-ems-pcf" element={<DocApiEmsPcfHome />} /> 
        <Route path="/documentation/ref-init-pc-setup" element={<DocPcSetupHome />} /> 
        <Route path="/documentation/ref-cncr" element={<DocCncrHome />} /> 
      </Routes>
    </div>
  );
}

export default App;
