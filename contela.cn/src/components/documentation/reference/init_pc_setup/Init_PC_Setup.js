import React from "react";
import DocPcSetupNav from "../../doc_layout/doc_nav/DocPcSetupNav";
import pic_1_1 from "./1-1.png";
import pic_1_2 from "./1-2.png";
import pic_1_3 from "./1-3.png";
import pic_1_4 from "./1-4.png";
import pic_1_5 from "./1-5.png";
import pic_1_6 from "./1-6.png";
import pic_2_1 from "./2-1.png";
import pic_2_2 from "./2-2.png";
import pic_2_2_1 from "./2-2-1.png";
import pic_2_2_2 from "./2-2-2.png";
import pic_2_2_3 from "./2-2-3.png";
import pic_2_2_4 from "./2-2-4.png";
import pic_2_2_5 from "./2-2-5.png";
import pic_2_2_6 from "./2-2-6.png";
import pic_2_3_1 from "./2-3-1.png";
import pic_2_3_2 from "./2-3-2.png";
import pic_2_3_3 from "./2-3-3.png";
import pic_2_3_4 from "./2-3-4.png";
import pic_3_1 from "./3-1.png";
import pic_3_2 from "./3-2.png";
import pic_3_3 from "./3-3.png";
import pic_3_4 from "./3-4.png";
import pic_3_5 from "./3-5.png";
import pic_3_6 from "./3-6.png";
import pic_3_7 from "./3-7.png";
import pic_3_8 from "./3-8.png";
import pic_3_9 from "./3-9.png";
import pic_4_1 from "./4-1.png";
import pic_4_2 from "./4-2.png";
import pic_4_3 from "./4-3.png";
import pic_4_4 from "./4-4.png";
import pic_5_1 from "./5-1.png";
import pic_5_2 from "./5-2.png";
import pic_5_3 from "./5-3.png";
import pic_5_4 from "./5-4.png";

const InitPCSetup = () => (
    <>
    <DocPcSetupNav />
    <div class="container px-100">
        <div class="card md-4 EmsApi">
            <div class="card-title" style= {{ textAlign: "center", fontSize: "2em", paddingTop: "10px" }}>
                <b>Initial PC Setup Procedure</b>
            </div>
            <div class="card-body" style={{ textAlign: "right", fontSize: "0.8em" }}>
                version 1.6                
                <br/>Initial Reg. 2022.11.29
                <br/>Last Update 2025.04.16
                <br/>rang0616
                <br/>Contela Inc.<hr/>
            </div>

            <div class="card-body" style={{ paddingTop: "0px" }}>
                <ul>
                    <li>해당 문서는 Contela에 입사하거나, 
                        새로운 PC를 받아 Setting할 때, 
                        도움을 주고자 제작하였으며 아래 내용은 Contela에서 업무를 시작하기 전에 
                        Setting 해야 하는 프로그램들과 계정 및 IP 설정에 대한 내용을 담고 있다.</li>
                    <li>초도 문서 기준 PC사양은 <b>Dell Latitude 3520</b> 모델이며, OS는 <b>윈도우 11</b>을 기본으로 한다.</li>
                </ul>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>1. Microsoft Office 365 설정</b>
            </div>
            
            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                1.1. 계정 설정
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 절차는 빨간 네모를 따라서 진행한다.</li>
                </ul>
                <ol>
                    <li>PC를 시작하면 기본으로 Microsoft 365에 해당하는 앱들이 설치되어 있다.</li>
                    <li style={{ marginTop: "5px" }}>먼저, 아무 프로그램(word, power point, excel 등)을 실행하고 왼쪽 하단의 <code><b>‘계정’</b></code>을 선택한다.
                        <br/>(예시는 Power Point로 실시함)</li>
                    <center><img src= {pic_1_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>중앙에 있는 <code><b>‘로그인’</b></code>을 선택한다.</li>
                    <center><img src= {pic_1_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>부여 받은 계정을 입력하고 <code><b>‘다음’</b></code>을 선택한다.</li>
                    <center><img src= {pic_1_3} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘회사 또는 학교 계정’</b></code>을 선택한다.
                                                      <br/>(이 화면이 나오지 않는 경우는 skip 한다.)</li>                    
                    <center><img src= {pic_1_4} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>암호를 입력하고 <code><b>‘로그인’</b></code>을 선택한다.</li>
                    <center><img src= {pic_1_5} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>초기에 경영지원팀에서 계정을 생성해준 경우에는 그룹웨어에 임시 비밀번호가 전송되어 있을 것이고, 
                                                      이미 비밀번호를 변경했다면 변경한 비밀번호로 로그인한다.</li>
                    <li style={{ marginTop: "5px" }}>아래 그림과 같이 <code><b>‘사용자 정보’</b></code>에 이름과 ID가 뜬다면 정상적으로 로그인이 완료된 것이다.</li>
                    <center><img src= {pic_1_6} width="100%"></img></center>
                </ol><hr/>
            </div>
            
            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                1.2. Outlook(회사 메일 관리 프로그램) 설정 절차 위치
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 절차는 빨간 네모를 따라서 진행한다.</li>
                </ul>
                <ol>
                    <li>먼저, 회사 GroupWare에 접속한다.</li>
                    <li style={{ marginTop: "5px" }}>로그인 후, 화면 상단 메뉴 중 <code><b>‘게시판’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>왼쪽 메뉴에서 <code><b>‘규정 및 양식’</b></code>→<code><b>'지원'</b></code>을 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>게시글 중, 제목이 <code><b>‘아웃룩 설정 방법(윈도우 11 및 MS Office 365 버전)’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>해당 게시글의 절차를 따라서 Outlook을 설정한다.</li>
                </ol>
            </div>
            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                1.2.1. 인터넷 보안 경고 해결방법
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래와 같은 인터넷 보안 경고가 나오는 경우의 해결방법에 대한 절차이다.</li>
                    <li>처음 Outlook을 설치하고 사용하는 과정에서 아래와 같은 인터넷 보안 경고창이 뜰 수 있다.</li>
                    <li>해당 경고창이 뜬다면 먼저 1.2.1.1의 절차인 인증서를 내려 받는 절차를 한번 수행하고 Outlook을 재시작해본다.</li>
                    <li>이후에도 계속해서 보안 경고가 나타난다면 메일 주소에 대한 Port번호 설정을 변경하는 절차인 1.2.1.2를 따라서 수행한다.</li>
                    <center><img src= {pic_2_2_1} width="100%"></img></center>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1em" }}>
                1.2.1.1. 보안 인증서 내려받기 절차
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ol>
                    <li style={{ marginTop: "5px" }}>인터넷 보안 경고창에서 <code><b>‘인증서 보기(V)’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_2_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>인증서 화면의 아래에서 <code><b>‘인증서 설치(I)...’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_2_3} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>실행되는 인증서 가져오기 마법사에서 저장소 위치는 <code><b>‘현재 사용자(C)’</b></code>을 선택하고 <code><b>'다음(N)'</b></code>을 누른다.</li>
                    <center><img src= {pic_2_2_4} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘인증서 종류를 기준으로 인증서 저장소를 자동으로 선택(U)’</b></code>을 선택하고 <code><b>'다음(N)'</b></code>을 누른다.</li>
                    <center><img src= {pic_2_2_5} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘마침(F)’</b></code>을 선택하고 인증서를 가져온다.</li>
                    <center><img src= {pic_2_2_6} width="100%"></img></center>
                </ol>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1em" }}>
                1.2.1.2. Mail Server Port 변경 절차
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>위 과정을 따른 후, Outlook을 재시작해도 인터넷 보안 경고가 나타난다면 아래의 절차를 따른다.</li>
                </ul>
                <ol>
                    <li style={{ marginTop: "5px" }}>먼저, 왼쪽 상단의 <code><b>‘파일’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_3_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>중앙의 <code><b>‘계정 설정’</b></code>을 선택하고 4번째인 <code><b>'서버 설정(S)'</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_3_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>아래 그림과 같이 <code><b>‘받는 메일’</b></code>의 아래에 <code><b>‘포트’</b></code>를 <code><b>'110'</b></code>으로 설정하고 
                                                      아래 <code><b>'이 서버에 암호화된 연결(SSL/TLS) 필요'</b></code>의 체크박스를 해제한다.</li>
                    <center><img src= {pic_2_3_3} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>그리고 <code><b>‘보내는 메일’</b></code>을 선택하고 <code><b>'포트'</b></code>를 <code><b>'25'</b></code>로 변경한다.</li>
                    <li style={{ marginTop: "5px" }}>아래에 <code><b>‘암호화 방법’</b></code>은 <code><b>'자동'</b></code>으로 선택하고 <code><b>'다음'</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_3_4} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>Outlook을 재시작하여 인터넷 보안 경고가 등장하는지 확인한다.</li>
                </ol><hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>2. 개인 PC IP 수동 설정 절차</b>
            </div>
            <div class="card-body">
                <ul>
                    <li>아래는 업무에 필요한 183망과 10망의 부여받은 IP를 수동으로 설정하는 절차이다.</li>
                    <li>183망과 10망의 연구소장님께서 할당해 주신다.</li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                2.1. 220망 설정 절차
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 절차는 빨간 네모를 따라서 진행한다.</li>
                </ul>
                <ol>
                    <li>먼저, <code><b>'제어판'</b></code>→<code><b>'네트워크 및 인터넷'</b></code>→<code><b>'네트워크 및 공유센터'</b></code>를 차례로 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>아래와 같은 화면이 나오면 다음으로 넘어간다.</li>
                    <center><img src= {pic_3_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘액세스 형식: 인터넷’</b></code>으로 되어 있는 네트워크의 <code><b>'이더넷'</b></code>을 선택한다.</li>
                    <center><img src= {pic_3_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>이더넷 상태창에서 <code><b>‘속성(P)’</b></code>을 선택한다.</li>
                    <center><img src= {pic_3_3} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘이 연결에 다음 항목 사용(O)'</b></code>에서 <code><b>'인터넷 프로토콜 버전 4(TCP/IPv4)'</b></code>를 더블 클릭한다.</li>                    
                    <center><img src= {pic_3_4} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘다음 IP 주소 사용(S)’</b></code>를 선택하고 부여받은 외부망 IP를 <code><b>'IP 주소(I)'</b></code>에 입력하고 
                                                      <code><b>‘서브넷 마스크(U)’</b></code>는 <code><b>'255.255.255.0'</b></code>으로, <code><b>‘기본 게이트웨이(D)’</b></code>는 
                                                      <code><b>“183.99.9.254”</b></code>로 입력한다.</li>
                    <center><img src= {pic_3_5} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>아래의 <code><b>‘다음 DNS 서버 주소 사용(E)'</b></code> 쪽에 <code><b>'기본 설정 DNS 서버(P)'</b></code>에 <code><b>“168.126.63.1”</b></code>을 입력한다.</li>                    
                    <center><img src= {pic_3_6} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>이후에 인터넷 브라우저를 실행하여 인터넷에 접속이 가능한지 확인한다.</li>                    
                </ol><hr/>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                2.2. 10망 설정 절차
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>사내 개발 Server 접속을 위한 10망 IP 설정에 대한 절차이다.</li>
                </ul>
                <ol>
                    <li>220망 설정과 동일하게 먼저, <code><b>'제어판'</b></code>→<code><b>'네트워크 및 인터넷'</b></code>→<code><b>'네트워크 및 공유센터'</b></code>를 차례로 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>아래와 같은 화면이 나오면 다음으로 넘어간다.</li>
                    <center><img src= {pic_3_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘액세스 형식: 인터넷에 연결되어 있지 않음’</b></code>으로 되어 있는 네트워크의 <code><b>'이더넷 2'</b></code>을 선택한다.
                                                      <br/>(<code><b>'연결'</b></code>의 이름은 <code><b>'이더넷 2'</b></code>가 아닐 수 있음)</li>
                    <center><img src= {pic_3_7} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>이더넷 상태창에서 <code><b>‘속성(P)’</b></code>을 선택한다.</li>
                    <center><img src= {pic_3_9} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘이 연결에 다음 항목 사용(O)'</b></code>에서 <code><b>'인터넷 프로토콜 버전 4(TCP/IPv4)'</b></code>를 더블 클릭한다.</li>                    
                    <center><img src= {pic_3_4} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}><code><b>‘다음 IP 주소 사용(S)’</b></code>를 선택하고 부여받은 10망 IP를 <code><b>'IP 주소(I)'</b></code>에 입력하고 
                                                      <code><b>‘서브넷 마스크(U)’</b></code>는 <code><b>'255.255.255.0'</b></code>으로 설정하고 <code><b>'확인'</b></code>을 누른다.</li>
                    <center><img src= {pic_3_8} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>명령 프롬프트를 실행시켜 <code><b>“10.11.237.10”</b></code>에 ping을 날려보고 응답이 있는지 확인한다.</li>
                    <li style={{ marginTop: "5px", color: "red" }}>혹시 10망에 접속이 안되면 무선랜(WIFI)를 사용 안함으로 설정한다.</li>
                </ol><hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>3. 기본 설치 프로그램 위치 안내</b>
            </div>
            <div class="card-body">
                <ul>
                    <li>아래 위치는 PC를 사용할 때, 기본적으로 설치해야 되는 프로그램의 위치이다.</li>
                    <li>필수적으로 아래에 해당하는 절차를 따라 설치를 수행한다.</li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                3.1. E-SET(PC 백신프로그램) 설치파일 위치
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ol>
                    <li>먼저, 회사 GroupWare에 접속한다.</li>
                    <li style={{ marginTop: "5px" }}>로그인 후, 화면 상단 메뉴 중 <code><b>‘게시판’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>왼쪽 메뉴에서 <code><b>‘규정 및 양식’</b></code>→<code><b>'지원'</b></code>을 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>게시글 중, 제목이 <code><b>‘E-SET(PC 백신프로그램) 설치파일_2024-06 updated’</b></code>을 선택한다.</li>
                    <center><img src= {pic_4_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>해당 게시글의 절차를 따라서 프로그램을 설치한다.</li>
                </ol>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                3.2. 신도리코(SINDOH) 흑백 복합기 설치 절차 위치
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 절차는 사내 흑백 복합기를 사용하기 위한 설치 절차서의 위치를 나타낸다.</li>
                </ul>
                <ol>
                    <li>먼저, 회사 GroupWare에 접속한다.</li>
                    <li style={{ marginTop: "5px" }}>로그인 후, 화면 상단 메뉴 중 <code><b>‘게시판’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>왼쪽 메뉴에서 <code><b>‘규정 및 양식’</b></code>→<code><b>'지원'</b></code>을 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>게시글 중, 제목이 <code><b>‘신도리코 흑백 복합기 설치 및 스캔방법'</b></code>을 선택한다.</li>
                    <center><img src= {pic_4_2} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>해당 게시글의 절차를 따라서 프로그램을 설치한다.</li>
                </ol>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                3.3. 교세라(KYOCERA) 컬러 프린터 드라이버 설치법 메뉴얼 위치
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 절차는 사내 컬러 프린터를 사용하기 위한 설치 절차서의 위치를 나타낸다.</li>
                </ul>
                <ol>
                    <li>먼저, 회사 GroupWare에 접속한다.</li>
                    <li style={{ marginTop: "5px" }}>로그인 후, 화면 상단 메뉴 중 <code><b>‘게시판’</b></code>을 선택한다.</li>
                    <center><img src= {pic_2_1} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>왼쪽 메뉴에서 <code><b>‘규정 및 양식’</b></code>→<code><b>'지원'</b></code>을 선택한다.</li>
                    <li style={{ marginTop: "5px" }}>게시글 중, 제목이 <code><b>‘교세라 컬러 프린터 드라이버 및 설치법 메뉴얼'</b></code>을 선택한다.</li>
                    <center><img src= {pic_4_3} width="100%"></img></center>
                    <li style={{ marginTop: "20px" }}>설치법 메뉴얼 화면에서 석우재 4층은 <code><b>‘B동 IP: 220.94.242.242'</b></code>을 사용하여 잘차서를 진행한다.</li>
                    <center><img src= {pic_4_4} width="100%"></img></center>
                </ol><hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>4. 그룹내 개발관련 IP 접속 관련 절차</b>
            </div>
            <div class="card-body">
                <ul>
                    <li>아래 절차는 CN개발그룹에서 개발을 수행하는 서버 접속을 위한 절차이다.</li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                4.1. 그룹내 개발 관련 서버 IP 목록
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>아래 표는 현재 CN개발그룹에서 사용중인 개발 서버 접속 IP이다.</li>
                    <li>해당 서버들의 접속 ID와 PW는 admin(현재 <code><b>김휘랑 프로</b></code>)에게 요청하여 생성하도록 한다.</li>
                </ul>

                <p style={{ textAlign: "center", paddingTop: "10px" }}><b>&lt;개발관련 서버 IP&gt;</b></p>
                <table class="datatable-table" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th colspan="2">IP | Port</th>
                            <th>사용 용도</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2">10.11.237.2</td>
                            <td>유지보수 Project Host IP, 연구소 Source Backup 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.4</td>
                            <td>VM(FGW소용량, OMP 개발 서버)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.5</td>
                            <td>VM(FGW대용량, ASN.1 개발 서버)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.6</td>
                            <td>VM(LRS 개발 서버)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.7</td>
                            <td>VM(vEPC1.0 개발 서버)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.8</td>
                            <td>VM(LoRa, HCRBT, OBXEPC2.0 개발 서버)</td>
                        </tr>
                        <tr>
                            <td>10.11.237.10</td>
                            <td>19122</td>
                            <td>5GC Onebox 개발서버</td>
                        </tr>
                        <tr>
                            <td>10.11.237.10</td>
                            <td>20122</td>
                            <td>vEPC Onebox3.0 개발서버(CentOS)</td>
                        </tr>
                        <tr>
                            <td>10.11.237.10</td>
                            <td>23122</td>
                            <td>5GC Cloud 개발서버(Ubuntu 20.04)</td>
                        </tr>
                        <tr>
                            <td>10.11.237.10</td>
                            <td>23222</td>
                            <td>5GC Cloud 개발서버(Ubuntu 22.04)</td>
                        </tr>
                        <tr>
                            <td>10.11.237.10</td>
                            <td>24122</td>
                            <td>vECP Onebox3.0 개발서버(RockyOS)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.17</td>
                            <td>LoRa NS Host IP</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.18</td>
                            <td>VM(LoRa 99a)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.19</td>
                            <td>VM(LoRa 99b)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.20</td>
                            <td>VM(LoRa 98a)</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.33</td>
                            <td>CRBT DPS01</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.37</td>
                            <td>CRBT SPSb</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.38</td>
                            <td>CRBT DPS00</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.41</td>
                            <td>LoRa NS 98a Host IP</td>
                        </tr>
                        <tr>
                            <td colspan="2">10.11.237.42</td>
                            <td>5GC Onebox runtime 서버</td>
                        </tr>
                        <tr>
                            <td>10.11.238.100</td>
                            <td>9280</td>
                            <td>Git Lab IP(Web으로 접속)</td>
                        </tr>
                        <tr>
                            <td colspan="3" style={{ backgroundColor: "gray" }}></td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.26</td>
                            <td>5GC 철도연 과제 runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.31</td>
                            <td>vEPC 해군 이중화(A side) runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.32</td>
                            <td>vEPC 해군 이중화(B side) runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.33</td>
                            <td>vEPC RockyOS runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.66</td>
                            <td>5GC Cloud 이중화(00) runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.69</td>
                            <td>5GC Cloud 이중화(01) runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.121</td>
                            <td>5GC Cloud 단중화 runtime 서버</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.186</td>
                            <td>vECP RockyOS runtime 서버2</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.191</td>
                            <td>Hi5GC Master 1</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.192</td>
                            <td>Hi5GC Master 2</td>
                        </tr>
                        <tr>
                            <td colspan="2">220.94.242.193</td>
                            <td>Hi5GC Master 3</td>
                        </tr>
                    </tbody>
                </table><hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>5. 회사 공유 폴더 접속 및 로그인 절차</b>
            </div>
            <div class="card-body">
                <ul>
                    <li>아래의 절차는 회사 공유 폴더에 접속과 로그인을 하는 절차이다.</li>
                    <li>회사 공유 폴더 계정 생성은 이창엽 이사님께서 할당해주신다.</li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                5.1. 회사 공유 폴더 접속 절차
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ol>
                    <li>바탕화면에서 <code><b>Win</b></code>키와 <code><b>R</b></code>키를 동시에 누른다.</li>
                    <li style={{ marginTop: "5px" }}>아래와 같은 실행창이 왼쪽 하단에 나타나면 <code><b>‘열기(O)’</b></code>에 
                                                     <code><b>'\\220.94.242.220’</b></code>을 입력하고 <code><b>'확인'</b></code>을 누른다.</li>
                    <center><img src= {pic_5_1} width="40%"></img></center>
                    <li style={{ marginTop: "20px" }}>Windows 보안창에 네트워크 자격 증명 입력이 나타나면 아래의 <code><b>‘다른 옵션 선택’</b></code>을 선택한다.</li>
                    <center><img src= {pic_5_2} width="40%"></img></center>
                    <li style={{ marginTop: "20px" }}>아래에 <code><b>‘다른 계정 사용'</b></code>을 선택하고 <code><b>'메일 주소'</b></code> 입력란에 
                                                      공유 폴더 ID(이름)와 설정한 비밀번호를 입력하고 <code><b>'확인'</b></code>을 선택한다.</li>
                    <center><img src= {pic_5_3} width="40%"></img></center>
                    <li style={{ marginTop: "20px" }}>만약, 위와 같이 입력한 후에 접속이 되지 않는다면 아래와 같이 ID에 <code><b>‘220.94.242.220\(ID)'</b></code>로 
                                                      입력하고 비밀번호를 입력하여 로그인을 시도한다.</li>
                    <center><img src= {pic_5_4} width="40%"></img></center>
                    <li style={{ marginTop: "20px" }}>회사 공유 서버에 정상적으로 접속되는 것을 확인한다.</li>
                </ol><hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>6. 기타 정보 공유</b>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                6.1. 그룹 공유기(WIFI) 정보
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <table class="datatable-table" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>con_cn_5G | con_cn_2.4G</td>
                            <td>Ncont#2024</td>
                        </tr>
                        <tr>
                            <td>con_B5G_1 | con_B5G_2 | con_B2.4G</td>
                            <td>c0Nwifi2023</td>
                        </tr>
                        <tr>
                            <td>con_outB</td>
                            <td>con2023outb</td>
                        </tr>
                    </tbody>
                </table><hr/>
            </div>
        </div>
    </div>
    </>
)

export default InitPCSetup;