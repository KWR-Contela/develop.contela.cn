import React from "react";
import { BsCheckSquare, BsCheckSquareFill, BsDribbble } from "react-icons/bs";
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
                    <b>/&lt;node-location&gt;/&lt;api-name&gt;/&lt;api-version&gt;/&lt;api-specific-resource-uri-part&gt;</b>
                </div>
                <ul>
                    <p><li><b>&lt;node-location&gt;</b>: pod 내부의 특정 노드를 설정</li>
                    <li><b>&lt;api-name&gt;</b>: pcf-policy-control</li>
                    <li><b>&lt;api-version&gt;</b>: vM.N로 설정하고 "M"은 기존 버전과 호환되지 않는 경우, "N"은 새로운 기능 추가의 경우에 1씩 증가시키도록 한다.</li>
                    <li><b>&lt;api-specific-resource-uri-part&gt;</b>: 특정 resource에 대한 세부 표시</li></p>
                </ul>
            </div>

            <div class="card-title">
                Description<hr />
            </div>
            <div class="card-body">
                <ul>
                    <li style={{fontSize: "1.2rem"}}><b>POST</b></li>
                        <p>새로운 Resource의 생성 담당(Create)
                            <br/>PCF 내부적으로 중복 생성은 "Bad Request"로 처리</p>
                    <li style={{fontSize: "1.2rem"}}><b>PUT</b></li>
                        <p>기존 Resource의 수정을 담당
                            <br/>Request Body에 있는 key값으로 식별하여 하위 정보를 변경</p>
                    <li style={{fontSize: "1.2rem"}}><b>General Grammar</b></li>
                        <ul>
                            <li style={{listStyle: "circle"}}>
                                <i style={{color: "#ffb400", textTransform: "uppercase"}}>Required</i>
                            </li>
                                필수로 포함되어야하는 파라미터 표시
                            <li style={{listStyle: "circle"}}><b>[<i>value</i>]</b></li>
                                Optional Parameter 표시
                            <li style={{listStyle: "circle"}}><b>(<i>value1, value2</i>)</b></li>
                                여러 파라미터의 묶음인 경우 괄호를 사용하여 표시
                            <li style={{listStyle: "circle"}}><b>&lt;n&gt;*&lt;m&gt;<i>value</i></b></li>
                                &lt;n&gt;는 Minimum값을 의미, &lt;m&gt;은 Maximum값을 의미<br/>
                                default value는 0
                                <div class="card" style={{width: "30rem"}}>
                                    <div class="card-header">Example</div>
                                    <div class="card-body">
                                        <p><b>*<i>value</i></b>: 0을 포함한 모든 수</p>
                                        <p><b>1*<i>value</i></b>: 적어도 1개 이상</p>
                                        <p><b>1*32<i>value</i></b>: 1개이상 32개 이하</p>
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
                            <th>Request Body</th>
                            <th>Response Body</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan='3'>/pre-config/plmns</td>
                            <td>GET <BsCheckSquareFill /></td>
                            <td></td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*4<i>PLMN</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                     Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "plmn": [<br/>    "45005",<br/>    "99999"<br/>  ]<br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 저장된 모든 PLMN 정보들을 Display<br/><br/>
                                <b>[Restrictions]</b><br/>
                                PLMN 최대 개수: 4개
                            </td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquareFill /></td>
                            <td>
                                <p>1*4<i>PLMN</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "plmn": "45005"<br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 201 Created</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 PLMN을 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquareFill /></td>
                            <td>
                                <p>1*4<i>PLMN</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "plmn": "45005"<br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 저장된 PLMN을 Delete</td>
                        </tr>

                        <tr>
                            <td rowSpan='3'>/pre-config/tacs</td>
                            <td>GET <BsCheckSquareFill /></td>
                            <td></td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*32<i>TAC</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                     Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "tac": [<br/>    1,<br/>    4,<br/>    999<br/>  ]<br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                        <td>
                            <b>[Description]</b><br/>
                            PCF에 저장된 모든 TAC 정보들을 Display<br/><br/>
                            <b>[Restrictions]</b><br/>
                            TAC 최대 개수: 32개
                        </td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquareFill /></td>
                            <td>
                                <p>1*32<i>TAC</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "tac": 1<br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 201 Created</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 TAC를 Create</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquareFill /></td>
                            <td>
                                <p>1*32<i>TAC</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                Ex)<br/>&#123;<br/>  "tac": 1<br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 저장된 TAC를 Delete</td>
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
                            <th>Request Body</th>
                            <th>Response Body</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan='4'>/am-policies</td>
                            <td>GET <BsCheckSquareFill /></td>
                            <td></td>
                            <td>
                                <p style={{whiteSpace: "pre-wrap"}}><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*10<i>(AM Policy Name,
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                              Required</i></sup>
                                <br/>                RFSP Index,
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                     Required</i></sup>
                                <br/>                Service Area Resctriction)</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                     Required</i></sup>
                                </p>
                                <pre>
                                    Ex)
                                    <br/>&#123;
                                    <br/>  "amPolicyInfo": &#123;
                                    <br/>      "amPolicyName": "TestName1",
                                    <br/>      "rfspIndex": 2,
                                    <br/>      "serviceAreaRestriction": &#123;
                                    <br/>        "type": 1,
                                    <br/>        "tac": [
                                    <br/>          1,
                                    <br/>          55
                                    <br/>        ]
                                    <br/>      &#125;
                                    <br/>    &#125;
                                    <br/>  &#125;
                                    <br/>&#125;
                                </pre><hr/>                                              
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에서 모든 AM Policy Info의 정보를 Display<br/><br/>
                                <b>[Restrictions]</b><br/>
                                AM Policy Info 최대 개수: 10개,<br/>
                                AM Policy Name 최대 길이: 64,<br/>
                                RFSP Index 범위: 1 ~ 256<br/><br/>
                                여러개인 경우, Linked Reply로 전송함.
                            </td>
                            
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquareFill /></td>
                            <td>
                                <p>(<i>AM Policy Name,
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>  Required</i></sup>
                                <br/>RFSP Index,
                                <br/><sup><i class="ApiMandatory">Required</i></sup>
                                <br/>Service Area Restriction</i>)
                                <br/><sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyInfo": &#123;
                                    <br/>    "amPolicyName": "TestName1",
                                    <br/>    "rfspIndex": 2,
                                    <br/>    "serviceAreaRestriction": &#123;
                                    <br/>      "type": 0,
                                    <br/>      "tac": [
                                    <br/>        2
                                    <br/>      ]
                                    <br/>    &#125;
                                    <br/>  &#125;
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 201 Created</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 AM Policy Info를 Create</td>
                        </tr>
                        <tr>
                            <td>PUT <BsCheckSquareFill /></td>
                            <td>
                                <p>(<i>AM Policy Name,<br/>
                                <sup><i class="ApiMandatory">&nbsp;&nbsp;Required</i></sup><br/>
                                [RFSP Index], [Service Area Restriction]</i>)</p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyInfo": &#123;
                                    <br/>    "amPolicyName": "TestName1",
                                    <br/>    "serviceAreaRestriction": &#123;
                                    <br/>      "tac": [
                                    <br/>        2
                                    <br/>      ]
                                    <br/>    &#125;
                                    <br/>  &#125;
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에서 AM Policy Info의 정보를 Change<br/><br/>
                                <b>[Restrictions]</b><br/>
                                AM Policy Name, Service Area Restriction Type은 변경할 수 없음.
                            </td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquareFill /></td>
                            <td>
                                <i>AM Policy Name</i>
                                <br/><sup><i class="ApiMandatory">Required</i></sup>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyName": "TestName1"
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에서 AM Policy Info를 Delete</td>
                        </tr>

                        <tr>
                            <td>/am-policies/policy-name</td>
                            <td>GET <BsCheckSquareFill /></td>
                            <td></td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*10<i>AM Policy Name</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                     Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyName": [
                                    <br/>    "TestName1",
                                    <br/>    "TestName2"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에 저장된 AM Policy Info의 모든 AM Policy Name들을 Display</td>
                        </tr>
                        
                        <tr>
                            <td>/am-policies/policy-name/<i>&#123;policyName&#125;</i></td>
                            <td>GET <BsCheckSquareFill /></td>
                            <td></td>
                            <td>
                                <p style={{whiteSpace: "pre-wrap"}}><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: (<i>AM Policy Name,
                                <br/><sup><i class="ApiMandatory">                      Required</i></sup>
                                <br/>                RFSP Index,
                                <br/><sup><i class="ApiMandatory">                      Required</i></sup>
                                <br/>                Service Area Restriction</i>)
                                <br/><sup><i class="ApiMandatory">                      Required</i></sup>
                                </p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyInfo": &#123;
                                    <br/>    "amPolicyName": "TestName2",
                                    <br/>    "rfspIndex": 5,
                                    <br/>    "serviceAreaRestriction": &#123;
                                    <br/>      "type": 0,
                                    <br/>      "tac": [
                                    <br/>        999
                                    <br/>      ]
                                    <br/>    &#125;
                                    <br/>  &#125;
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF에서 AM Policy Name이 <i>value</i>인 AM Policy Info를 Display</td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>

            <div class="card-header">
                URSP Rule
            </div>
            <div class="card-body">
                <table class="datatable-table">
                    <thead>
                        <tr>
                            <th>Resource URI</th>
                            <th>HTTP Method</th>
                            <th>Request Body</th>
                            <th>Response Body</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td rowSpan='2'>/ue-policies/ursp/ursp-rules</td>
                            <td>GET <BsCheckSquare /></td>
                            <td>
                                <p><i>Get Type<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/></i></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "getType": 0
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*384<i>URSP Rules</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                                Required</i></sup>
                                </p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  [
                                    <br/>    &#123;
                                    <br/>      "urspRuleId": "TestRuleId1",
                                    <br/>      "plmnId": "45005",
                                    <br/>      "precedence": 0,
                                    <br/>      "trafficDescriptors": [
                                    <br/>        &#123;
                                    <br/>          "type": "dnn",
                                    <br/>          "value": "mcptt"
                                    <br/>        &#125;
                                    <br/>      ],
                                    <br/>      "routeSelectionDescriptors": [
                                    <br/>        &#123;
                                    <br/>          "precedence": 0,
                                    <br/>          "routeSelectionDescriptor": [
                                    <br/>            &#123;
                                    <br/>              "type": "SNSSAI",
                                    <br/>              "value": "1-000000"
                                    <br/>            &#125;
                                    <br/>          ]
                                    <br/>        &#125;
                                    <br/>      ]
                                    <br/>    &#125;,
                                    <br/>    . . .
                                    <br/>  ]
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                PCF 내 모든 URSP Rule(s)를 조회<br/>
                                <br/><b>Get Type(0)</b>: 각 URSP Rule의 전체 정보 조회
                                <br/><b>Get Type(1)</b>: 각 URSP Rule의 ID만 조회
                                <br/><br/>
                                <b>[Restrictions]</b><br/>
                                URSP Rule(s)의 최대 개수: 384개
                            </td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                <p><i>URSP Rule Info<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/></i></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "urspRuleId": "TestRuleId1",
                                    <br/>  "plmnId": "45005",
                                    <br/>  "precedence": 0,
                                    <br/>  "trafficDescriptors": [
                                    <br/>    &#123;
                                    <br/>      "type": "dnn",
                                    <br/>      "value": "mcptt"
                                    <br/>    &#125;
                                    <br/>  ],
                                    <br/>  "routeSelectionDescriptors": [
                                    <br/>    &#123;
                                    <br/>      "precedence": 0,
                                    <br/>      "routeSelectionDescriptor": [
                                    <br/>        &#123;
                                    <br/>          "type": "SNSSAI",
                                    <br/>          "value": "1-000000"
                                    <br/>        &#125;
                                    <br/>      ]
                                    <br/>    &#125;
                                    <br/>  ]
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 201 Created</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                URSP Rule을 생성</td>
                        </tr>
                        <tr>
                            <td>/ue-policies/ursp/ursp-rules/&#123;urspRuleId&#125;</td>
                            <td>DELETE <BsCheckSquare /></td>
                            <td></td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                URSP Rule을 삭제</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-header">
                Policy by Subscriber
            </div>
            <div class="card-body">
                <table class="datatable-table">
                    <thead>
                        <tr>
                            <th>Resource URI</th>
                            <th>HTTP Method</th>
                            <th>Request Body</th>
                            <th>Response Body</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td rowSpan='6'>/policy-by-subs</td>
                            <td rowSpan='3'>GET <BsCheckSquare /></td>
                            <td>
                                <p><i>IMSI</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": "450051000000000"
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: <i style={{whiteSpace: "pre-wrap"}}>[AM Policy Name],
                                <br/>               [URSP Rule Ids]</i>
                                <br/></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyName": "TestName1",
                                    <br/>  "urspRuleIds": [
                                    <br/>    "TestRuleId1",
                                    <br/>    "TestRuleId2",
                                    <br/>    "TestRuleId3"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy By Subs에서 IMSI에 적용된 AM Policy Name 및 URSP Rule Ids를  Display
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><i>AM Policy Name</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "amPolicyName": "TestName1"
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*20000<i>IMSI</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                    Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": [
                                    <br/>    "450051000000000",
                                    <br/>    "999991000000005"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy by Subs List에서 AM Policy Name이 적용된 IMSI들을 Display<br/><br/>
                                <b>[Restrictions]</b><br/>
                                1개 AM Policy Name에 대응될 수 있는 최대 IMSI 개수: 20000개
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><i>URSP Rule ID</i><br/>
                                <sup><i class="ApiMandatory">Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "urspRuleId": "TestRule1"
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 200 OK
                                <br/>Content: 1*20000<i>IMSI</i>
                                <br/><sup><i class="ApiMandatory" style={{whiteSpace: "pre-wrap"}}>                    Required</i></sup></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": [
                                    <br/>    "450051000000000",
                                    <br/>    "999991000000005"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy by Subs에서 URSP Rule이 적용된 IMSI들을 Display<br/><br/>
                                <b>[Restrictions]</b><br/>
                                1개 URSP Rule ID에 대응될 수 있는 최대 IMSI 개수: 20000개
                            </td>
                        </tr>
                        <tr>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                <p><i>IMSI,<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/>
                                [AM Policy Name],
                                <br/>[URSP Rule IDs]</i><br/></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": "450051000000000",
                                    <br/>  "amPolicyName": "TestName1",
                                    <br/>  "urspRuleIds": [
                                    <br/>    "TestRuleId1",
                                    <br/>    "TestRuleId2",
                                    <br/>    "TestRuleId3"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 201 Created</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy by Subs List에 IMSI와 적용할 AM Policy Name 및 URSP Rule Ids를 Create</td>
                        </tr>
                        <tr>
                            <td>PUT <BsCheckSquare /></td>
                            <td>
                                <p><i>IMSI,<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/>
                                [AM Policy Name],<br/>
                                [URSP Rule IDs]</i><br/></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": "450051000000000",
                                    <br/>  "amPolicyName": "TestName2",
                                    <br/>  "urspRuleIds": [
                                    <br/>    "TestRuleId1",
                                    <br/>    "TestRuleId2",
                                    <br/>    "TestRuleId3"
                                    <br/>  ]
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 Not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy by Subs List에서 IMSI에 적용된 AM Policy Name 및 URSP Rule Ids를 Change</td>
                        </tr>
                        <tr>
                            <td>DELETE <BsCheckSquare /></td>
                            <td>
                                <p><i>IMSI<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/></i></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": "450051000000000"
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy by Subs List에서 IMSI에 적용된 AM Policy Name 및 URSP Rule Ids를 Delete</td>
                        </tr>
                        <tr>
                            <td>/policy-by-subs/apply</td>
                            <td>POST <BsCheckSquare /></td>
                            <td>
                                <p><i>IMSI,<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/>
                                Policy Type<br/>
                                <sup><i class="ApiMandatory">Required</i></sup><br/></i></p>
                                <pre>
                                    Ex)<br/>&#123;
                                    <br/>  "imsi": "450051000000000",
                                    <br/>  "policyType": 1
                                    <br/>&#125;
                                </pre>
                            </td>
                            <td>
                                <p><b>Success</b>
                                <br/>Code: 204 No Content</p><hr/>
                                <p><b>Fail</b>
                                <br/>Code: 400 Bad Request                                
                                <br/>Code: 404 not Found</p>
                            </td>
                            <td>
                                <b>[Description]</b><br/>
                                Policy By Subs에 등록된 특정 IMSI에 대한 Policy의 강제 적용을 시도
                                <br/><br/>
                                <b>Policy Type(0)</b>: AM Policy<br/>
                                <b>Policy Type(1)</b>: URSP Rule(s)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    </>
)

export default EmsApi;
