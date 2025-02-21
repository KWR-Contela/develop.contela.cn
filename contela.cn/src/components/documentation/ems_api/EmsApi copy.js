import React from "react";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import DocEmsApiNav from "../doc_layout/doc_nav/DocEmsApiNav";

const EmsApi = () => (
    <>
    <DocEmsApiNav />
    <div class="container px-100">
        <div class="card md-4 EmsApi">
            <div class="card-title">
                PCF Policy Control APIs<hr />
            </div>
            <div class="card-body">
                PCF Policy Control APIs는 PCF의 정책 제어를 위해 제공됩니다.
            </div>

            <div class="card-title">
                Path<hr />
            </div>
            <div class="card-body"> 
                <div class="card card-body">
                    /&lt;node-location&gt;/&lt;api-name&gt;/&lt;api-version&gt;/&lt;api-specific-resource-uri-part&gt;
                </div>
                <li>&lt;node-location&gt;: pod 내부의 특정 노드를 설정</li>
                <li>&lt;api-name&gt;: pcf-policy-control</li>
                <li>&lt;api-version&gt;: vM.N로 설정하고 "M"은 기존 버전과 호환되지 않는 경우, "N"은 새로운 기능 추가의 경우에 1씩 증가시키도록 한다.</li>
                <li>&lt;api-specific-resource-uri-part&gt;: 특정 resource에 대한 세부 표시</li>
            </div>

            <div class="card-title">
                Description<hr />
            </div>
            <div class="card-body">
                <ul>
                    <li style={{fontSize: "1.2rem"}}><b>POST</b></li>
                        <p>새로운 Resource의 생성 담당<br/>
                        POST 요청마다, 새로운 Resource가 생성됨</p>
                    <li style={{fontSize: "1.2rem"}}><b>PUT</b></li>
                        <p>새로운 Resource의 생성과 수정을 담당<br/>
                        PUT 요청마다, 같은 Resource가 반환됨, 속성은 변경 가능</p>
                    <li style={{fontSize: "1.2rem"}}><b>General Grammar</b></li>
                        <ul>
                            <li style={{listStyle: "circle"}}>[value]</li>
                                Optional Parameter 표시
                            <li style={{listStyle: "circle"}}>&lt;n&gt;*&lt;m&gt;value</li>
                                &lt;n&gt;는 Minimum값을 의미, &lt;m&gt;은 Maximum값을 의미<br/>
                                default value는 0이다.
                                <div class="card" style={{width: "20rem"}}>
                                    <div class="card-header">Example</div>
                                    <div class="card-body">
                                        <p><b>*value</b>: 0을 포함한 모든 수</p>
                                        <p><b>1*value</b>: 적어도 1개 이상</p>
                                        <p><b>1*32value</b>: 1개이상 32개 이하</p>
                                    </div>
                                </div>
                        </ul>
                </ul>
            </div>

            <div class="card-title">
                Supported<hr />
            </div>
            <div class="card-body">
                <li><BsCheckSquare/> 개발 예정</li>
                <li><BsCheckSquareFill/> 개발 완료</li>
            </div>

            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Pre-Config Information
            </div>
            <div class="card-body">
                <table class="datatable-table">
                    <thead>
                        <tr>
                            <th>Resource URI</th>
                            <th>HTTP Method</th>
                            <th>Request</th>
                            <th>Response</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan='2'>/pre-config</td>
                            <td>GET</td>
                            <td></td>
                            <td>"PLMN", "TAC", "IMSI"</td>
                            <td>Pre-Config에 해당하는 정보의 종류를 전달</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td></td>
                            <td></td>
                            <td>Pre-Config에 저장된 모든 정보를 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/plmns</td>
                            <td>GET <BsCheckSquare /></td>
                            <td></td>
                            <td>
                                *PLMN<br/>
                            </td>
                            <td>PCF에 저장된 모든 PLMN 정보들을 Display</td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                1*PLMN<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>PCF에 *PLMN을 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td>*PLMN</td>
                            <td></td>
                            <td>
                                PCF에 저장된 PLMN 중 *PLMN을 Delete<br />
                                *PLMN없을 시, PLMN 전체 삭제
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/plmns/value</td>
                            <td>GET</td>
                            <td></td>
                            <td></td>
                            <td>PCF에 value에 해당하는 PLMN의 등록 여부 확인</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>PLMN</td>
                            <td></td>
                            <td>PCF에 PLMN을 value에서 PLMN로 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td></td>
                            <td></td>
                            <td>PCF에 value에 해당하는 PLMN을 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/tacs</td>
                            <td>GET <BsCheckSquare /></td>
                            <td></td>
                            <td>*TAC</td>
                            <td>PCF에 저장된 모든 TAC 정보들을 Display</td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                1*TAC<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>PCF에 *TAC을 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td>*TAC</td>
                            <td></td>
                            <td>
                                PCF에 저장된 TAC 중 *TAC을 Delete<br/>
                                *TAC없을 시, TAC 전체 삭제
                            </td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/tacs/value</td>
                            <td>GET</td>
                            <td></td>
                            <td></td>
                            <td>PCF에 value에 해당하는 TAC 등록 여부 확인</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td></td>
                            <td>TAC</td>
                            <td>PCF에 TAC를 value에서 TAC로 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td></td>
                            <td></td>
                            <td>PCF에 value에 해당하는 TAC Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/imsis</td>
                            <td>GET <BsCheckSquare /></td>
                            <td></td>
                            <td>*IMSI</td>
                            <td>PCF에 저장된 모든 IMSI 정보들을 Display</td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                1*IMSI<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>PCF에 *IMSI을 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td>*IMSI</td>
                            <td></td>
                            <td>
                                PCF에 저장된 IMSI 중 *IMSI을 Delete<br/>
                                *IMSI없을 시, IMSI 전체 삭제
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-header">
                AM Policy Information
            </div>
            <div class="card-body">
                <table class="datatable-table">
                    <thead>
                        <tr>
                            <th>Resource URI</th>
                            <th>HTTP Method</th>
                            <th>Request</th>
                            <th>Response</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan='3'>/am-policies</td>
                            <td>GET</td>
                            <td></td>
                            <td>"AM Policy Name",<br/>"RFSP Index",<br/>"Service Area Restriction"</td>
                            <td>AM Policy Info에 해당하는 정보의 종류 전달</td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                1*AM Policy Info<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>PCF에 AM Policy Info들을 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td></td>
                            <td></td>
                            <td>PCF에 저장된 모든 AM Policy Info을 Delete</td>
                        </tr>

                        <tr>
                            <td>/am-policies/policy-name</td>
                            <td>GET <BsCheckSquare /></td>
                            <td></td>
                            <td>*AM Policy Name</td>
                            <td>PCF에 저장된 AM Policy Info의 모든 AM Policy Name들을 Display</td>
                        </tr>
                        
                        <tr>
                            <td rowSpan='3'>/am-policies/policy-name/value</td>
                            <td>GET <BsCheckSquare /></td>
                            <td></td>
                            <td>AM Policy Info</td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info를 Display</td>
                        </tr>
                        <tr>
                            <td>PUT <BsCheckSquare /></td>
                            <td>
                                AM Policy Info<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info를 AM Policy Info로 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td></td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info를 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='4'>/am-policies/policy-name/value/rfsp-index</td>
                            <td>GET</td>
                            <td></td>
                            <td>RFSP Index value</td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 RFSP Index 값을 Display</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>RFSP Index value</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 RFSP Index 값을 Create</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>RFSP Index value</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 RFSP Index 값을 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td></td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 RFSP Index 값을 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/am-policies/policy-name/value/service-area-restriction</td>
                            <td>GET</td>
                            <td></td>
                            <td>Type, *TAC</td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보를 Display</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>Type, *TAC</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보를 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td></td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보를 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/am-policies/policy-name/value/service-area-restriction/type</td>
                            <td>GET</td>
                            <td></td>
                            <td>Type value</td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 Type을 Display</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>Type value</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 Type을 &#123;value&#125;로 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>Type value</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 Type을 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/am-policies/policy-name/value/service-area-restriction/tacs</td>
                            <td>GET</td>
                            <td></td>
                            <td>*TAC</td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 TAC List을 Display</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>*TAC</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 TAC List을 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>*TAC</td>
                            <td></td>
                            <td>PCF에서 AM Policy Name이 value인 AM Policy Info의 Service Area Restriction 정보에서 TAC List을 Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-header">
                Policy Association Information
            </div>
            <div class="card-body">
                <table class="datatable-table">
                    <thead>
                        <tr>
                            <th>Resource URI</th>
                            <th>HTTP Method</th>
                            <th>Request</th>
                            <th>Response</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td rowSpan='5'>/policy-assocs</td>
                            <td rowSpan='2'>GET <BsCheckSquare /></td>
                            <td>
                                IMSI<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td>AM Policy Name</td>
                            <td>Policy Assoc Info에서 &#123;IMSI&#125;에 적용된 AM Policy Name을 Display</td>
                        </tr>
                        <tr>
                            <td>
                                AM Policy Name<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td>*IMSI</td>
                            <td>Policy Assoc Info에서 &#123;AM Policy Name&#125;이 적용된 &#123;IMSI List&#125;를 Display</td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                IMSI, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AM Policy Name<br/>
                                <i class="ApiMandatory">Required</i>
                                <i class="ApiMandatory">&nbsp;&nbsp;&nbsp;Required</i>
                            </td>
                            <td></td>
                            <td>Policy Assoc Info에 IMSI와 적용할 AM Policy Name을 Create</td>
                        </tr>
                        <tr>
                            <td>PUT <BsCheckSquare /></td>
                            <td>
                                IMSI, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AM Policy Name<br/>
                                <i class="ApiMandatory">Required</i>
                                <i class="ApiMandatory">&nbsp;&nbsp;&nbsp;Required</i>
                            </td>
                            <td></td>
                            <td>Policy Assoc Info에서 IMSI에 적용된 AM Policy Name을 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td>
                                IMSI<br/>
                                <i class="ApiMandatory">Required</i>
                            </td>
                            <td></td>
                            <td>Policy Assoc Info에서 IMSI에 적용된 AM Policy Name을 Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
)

export default EmsApi;
