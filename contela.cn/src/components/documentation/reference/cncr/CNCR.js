import React from "react";
import DocCncr from "../../doc_layout/doc_nav/DocCncr";

const CNCR = () => (
    <>
    <DocCncr />
    <div class="container px-100">
        <div class="card md-4 EmsApi">
            <div class="card-title" style= {{ textAlign: "center", fontSize: "2em", paddingTop: "10px" }}>
                <b>CN Group Coding Guide</b>
            </div>
            <div class="card-body" style={{ textAlign: "right", fontSize: "0.8em" }}>
                version 1.1
                <br/>2023.11.28
                <br/>rang0616
                <br/>Contela Inc.<hr/>
            </div>

            <div class="card-title" style={{ fontSize: "2em" }}>
                <b>1. Naming</b>
            </div>
            
            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                File Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>.cc와 .h에 대한 이름을 설정할 때에는 해당 모듈의 이름을 대문자로 쓰고 언더바( _ )를 붙이는 것을 기본으로 한다.</li>
                    <li>그리고 해당 파일의 기능을 동사+명사의 형식으로 생성하고 동사와 명사의 시작 문자는 대문자로 생성한다.
                        <p><b>ex. <code>PCF_ProcAMPolicy.cc</code>, <code>PCF_ProcAMPolicy.h</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Function Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Function에 대한 이름을 설정할 때에는 해당 모듈의 이름을 소문자로 쓰고 언더바( _ )를 붙이는 것을 기본으로 한다.</li>
                    <li>Function의 파라미터는 입력을 앞쪽에, 출력은 뒤쪽에, flag 등을 제일 마지막에 위치하도록 한다.</li>
                    <li>그리고 Function의 이름은 동사+명사의 형식으로 생성하고 동사와 명사의 시작 문자는 대문자로 생성한다.
                        <p><b>ex. <code>pcf_CreateAMPolicyAssocInfo()</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Structure Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Structure을 선언할 때에는 해당 Structure의 특징을 쓴 뒤에 "_t"를 붙이는 것을 기본으로 한다.</li>
                    <li>Structure에 대한 이름을 설정할 때에는 시작을 "st"로 하는 것을 기본으로 한다.</li>
                    <li>그리고 Structure가 나타내는 특징을 명사의 형식으로 생성하고 명사의 시작 문자는 대문자로 생성한다.
                        <p><b>ex. <code>AMThreadInfo_t stAMThreadInfo;</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Value Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Variable에 대한 이름을 설정할 때에는 시작을 Variable의 자료형의 줄임말을 소문자로 붙이는 것을 기본으로 한다.</li>
                    <li>아래는 자료형의 줄임말을 나타낸다.
                        <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;Data Type Abbreviation&gt;</b></p>
                        <div class="Cncr-Abbreviation">
                            <pre>char        -&gt; c</pre>
                            <pre>short       -&gt; s</pre>
                            <pre>int         -&gt; i (Value or Index)</pre>
                            <pre>int         -&gt; n (Length or Count)</pre>
                            <pre>long        -&gt; l</pre>
                            <pre>long long   -&gt; ll</pre>
                            <pre>float       -&gt; f</pre>
                            <pre>double      -&gt; d</pre>
                            <pre>enum        -&gt; e</pre>
                            <pre>bool        -&gt; b</pre>
                            <pre>char[]      -&gt; s (Null-Termination String)</pre><br/>

                            <pre>unsigned char      -&gt; uc</pre>
                            <pre>unsigned char[]    -&gt; us (Binary String)</pre>
                            <pre>unsigned short     -&gt; us</pre>
                            <pre>unsigned int       -&gt; un</pre>
                            <pre>unsgiend long      -&gt; ul</pre>
                            <pre>unsigned long long -&gt; ull</pre>
                        </div>
                        <p><b>ex. <code>unsigned int unLogLevel = 0;</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Pointer Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Pointer에 대한 이름을 설정할 때에는 시작을 "p"로 하고 해당 Pointer의 이름을 쓰는 것을 기본으로 한다.</li>
                    <li>그리고 Pointer가 나타내는 특징을 명사의 형식으로 생성하고 명사의 시작 문자는 대문자로 생성한다.
                        <p><b>ex. <code>pAlarm</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Global Variable Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Global로 선언할 Variable에 대한 이름을 설정할 때에는 시작을 "g"로 하는 것을 기본으로 한다.</li>
                    <li>그리고 해당 Variable의 자료형을 추가로 나타내고 명사의 형식으로 생성하고 명사의 시작 문자는 대문자로 생성한다.
                        <p><b>ex. <code>unsigned int gunRowCnt</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Macro & Enum Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>#define을 써서 사용할 상수에 대한 이름을 설정할 때에는 시작을 모듈이름으로 하고 
                        해당 상수를 사용하는 위치(ex. Thread)와 특징을 대문자로 쓰는 것을 기본으로 한다.</li>
                    <li>그리고 각각의 단어는 언더바( _ )를 사용하여 구분한다.
                        <p><b>ex. <code>#define NM_WORKING_THREAD_MAX_QUEUE_COUNT 10000</code></b></p>
                    </li>
                    <li>열거형(enum)의 선언은 뒤에 "_e"를 붙이고 이름은 e로 시작한다.
                        <p><b>ex. <code>ConnState_e eConnState;</code></b></p>
                    </li>
                </ul>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Exception Naming
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>Naming의 예외적으로 사용하는 것들에는 아래와 같다.</li>
                    <li>대부분의 경우, 소문자로 해당 library의 이름을 쓰고 언더바( _ )를 사용하여 세부사항을 표기하고 아래의 표기를 따른다.
                        <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;Exception Naming&gt;</b></p>
                        <div class="Cncr-Abbreviation">
                            <pre>dy_timer_id   -&gt; timer_"<i>details</i>"</pre>
                            <pre>dy_pipe_t     -&gt; *pipe_"<i>details</i>"</pre>
                            <pre>dy_lfmpool_t  -&gt; *mpool_"<i>details</i>"</pre>
                            <pre>stTableInfo_t -&gt; *hash_"<i>details</i>"</pre>
                            <pre>void          -&gt; *queue_"<i>details</i>"</pre>
                            <pre>pthread_t     -&gt; thread</pre>
                        </div>
                    </li>
                </ul><hr/>
            </div>

            <div class="card-title" style={{ marginTop: "10px", fontSize: "2em" }}>
                <b>2. Formatting</b>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                File Formatting
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li><strong>General</strong></li>
                    <ul>
                        <li>파일을 생성하면 아래의 순서대로 선언하여 사용한다.</li>
                    </ul>
                    <div class='Cncr-Abbreviation'>
                        <pre>
                            /* define */<br/>
                            ...<br/>
                            <br/>
                            /* static variables */<br/>
                            ...<br/>
                            <br/>
                            /* static functions */<br/>
                            ...
                        </pre>
                    </div>

                    <li><strong>Header File Formatting</strong></li>
                    <ul>
                        <li>Header File은 아래의 구조로 사용한다.</li>
                    </ul>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            #ifndef __XXX__<br/>
                            #define __XXX__<br/>
                            <br/>
                            ...<br/>
                            <br/>
                            #endif<br/>
                        </pre>
                    </div>
                </ul><hr/>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Indentation
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>4칸을 들여쓰며, space 사용한다. (tab은 설정마다 다르게 보이기 때문에 추천하지 않는다.)</li>
                    <li>함수의 파라미터가 길면 두번째 파라미터부터는 첫번째 파라미터에 맞춰서 정렬한다.</li>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            ex. function(first_param first,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;second_param second, ...);<br/>
                        </pre>
                    </div>

                    <li>함수 이름이 길면 다음과 같은 형태를 사용한다.</li>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            ex. toooooooooooooooooooooooooooooooooolong_function(<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fist_param first, second_param second, ...);<br/>
                        </pre>
                    </div>
                </ul><hr/>
            </div>

            <div class="card-header" style={{ marginTop: "10px", fontSize: "1.2em" }}>
                Bracket
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li><strong>Braces("&#123;", "&#125;")</strong></li>
                    <ul>
                        <li>중괄호 시작과 끝은 new line에서 하고, 정렬은 이전 라인에 맞춘다.</li>
                        <li>아래 Format들을 참고한다.</li>
                    </ul>

                    <li><strong>Parentheses("(", ")")</strong></li>
                    <ul>
                        <li>함수명이 끝나면 붙여서 소괄호를 사용한다.</li>
                        <li>소괄호 다음에 띄어쓰기를 하지 않는다. (여러 소괄호가 중복되면 필요에 따라 띄어쓰기)</li>
                        <li>연산자 우선순위가 애매하면 무조건 소괄호 사용한다.</li>
                        <li>for, if 등의 keyword 다음에는 space를 포함한다.</li>
                        <li>아래 Format들을 참고한다.</li>
                    </ul>

                    <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;If else Formatting&gt;</b></p>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            if (<i>condition</i>)<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;...<br/>
                            &#125;<br/>
                            else if (<i>condition</i>)<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;...<br/>
                            &#125;<br/>
                            else<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;...<br/>
                            &#125;<br/>
                        </pre>
                    </div>

                    <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;For Formatting&gt;</b></p>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            for (~;~;~)<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;...<br/>
                            &#125;<br/>
                        </pre>
                    </div>

                    <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;While Formatting&gt;</b></p>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            while (<i>condition</i>)<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;...<br/>
                            &#125;<br/>
                        </pre>
                    </div>

                    <p style={{ textAlign: "center", paddingTop: "10px", maxWidth: "500px" }}><b>&lt;Switch Case Formatting&gt;</b></p>
                    <div class="Cncr-Abbreviation">
                        <pre>
                            switch (...)<br/>
                            &#123;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;case ~:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;case ~:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;default ~:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                            &#125;<br/>
                        </pre>
                    </div>
                </ul><hr/>
            </div>

            <div class="card-title" style={{ marginTop: "10px", fontSize: "2em" }}>
                <b>3. Abbreviation</b>
            </div>
            <div class="card-body" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                <ul>
                    <li>전체 단어를 줄이더라도 어떤 단어인지 확실하게 구분되도록 줄이는 것을 기본으로 한다.</li>
                    <li>아래는 현재 CN Group에서 자주 사용하는 단어들의 줄임말 모음이다.</li>
                </ul>

                <p style={{ textAlign: "center", paddingTop: "10px" }}><b>&lt;Abbreviation Table&gt;</b></p>
                <table class="datatable-table" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Abbreviation</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Addr</td>
                            <td>Address</td>
                        </tr>
                        <tr>
                            <td>Alloc</td>
                            <td>Allocation</td>
                        </tr>
                        <tr>
                            <td>Assist</td>
                            <td>Assistance</td>
                        </tr>
                        <tr>
                            <td>Capa</td>
                            <td>Capability</td>
                        </tr>
                        <tr>
                            <td>Char</td>
                            <td>Characteristics</td>
                        </tr>
                        <tr>
                            <td>Conf</td>
                            <td>Configuration</td>
                        </tr>
                        <tr>
                            <td>Cfm</td>
                            <td>Confirm</td>
                        </tr>
                        <tr>
                            <td>Ctx</td>
                            <td>Context</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>Criticality</td>
                        </tr>
                        <tr>
                            <td>Cnt</td>
                            <td>Count</td>
                        </tr>
                        <tr>
                            <td>Dec</td>
                            <td>Decode</td>
                        </tr>
                        <tr>
                            <td>Diff</td>
                            <td>Differentiation</td>
                        </tr>
                        <tr>
                            <td>Dl</td>
                            <td>Downlink</td>
                        </tr>
                        <tr>
                            <td>Enc</td>
                            <td>Encode</td>
                        </tr>
                        <tr>
                            <td>Freq</td>
                            <td>Frequency</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Identity</td>
                        </tr>
                        <tr>
                            <td>Init</td>
                            <td>Initate</td>
                        </tr>
                        <tr>
                            <td>Inact</td>
                            <td>Inactive</td>
                        </tr>
                        <tr>
                            <td>Ind</td>
                            <td>Indicator</td>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td>Information</td>
                        </tr>
                        <tr>
                            <td>Len</td>
                            <td>Length</td>
                        </tr>
                        <tr>
                            <td>Loc</td>
                            <td>Location</td>
                        </tr>
                        <tr>
                            <td>Msg</td>
                            <td>Message</td>
                        </tr>
                        <tr>
                            <td>Mod</td>
                            <td>Modify</td>
                        </tr>
                        <tr>
                            <td>Num</td>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <td>Rel</td>
                            <td>Release</td>
                        </tr>
                        <tr>
                            <td>Req</td>
                            <td>Request</td>
                        </tr>
                        <tr>
                            <td>Rsc</td>
                            <td>Resource</td>
                        </tr>
                        <tr>
                            <td>Rsp</td>
                            <td>Response</td>
                        </tr>
                        <tr>
                            <td>Sec</td>
                            <td>Security</td>
                        </tr>
                        <tr>
                            <td>Sess</td>
                            <td>Session</td>
                        </tr>
                        <tr>
                            <td>Succ</td>
                            <td>Successful</td>
                        </tr>
                        <tr>
                            <td>Trans</td>
                            <td>Transfer</td>
                        </tr>
                        <tr>
                            <td>TL</td>
                            <td>Transport Layer</td>
                        </tr>
                        <tr>
                            <td>Unsucc</td>
                            <td>Unsuccessful</td>
                        </tr>
                        <tr>
                            <td>Ul</td>
                            <td>Uplink</td>
                        </tr>
                        <tr>
                            <td>Val</td>
                            <td>Value</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            </div>
        </div>
    </div>
    </>
)

export default CNCR;