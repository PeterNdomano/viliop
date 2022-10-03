/**
  For Automatic Scan in Search Engine Discovery
  */

import React from 'react';

export default function GuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
          A padding oracle is a function of an application which decrypts encrypted data provided by the client, e.g. internal
          session state stored on the client, and leaks the state of the validity of the padding after decryption. The existence of a
          padding oracle allows an attacker to decrypt encrypted data and encrypt arbitrary data without knowledge of the key
          used for these cryptographic operations. This can lead to leakage of sensible data or to privilege escalation
          vulnerabilities, if integrity of the encrypted data is assumed by the application.
          <br/>
          Block ciphers encrypt data only in blocks of certain sizes. Block sizes used by common ciphers are 8 and 16 bytes.
          Data where the size doesn’t match a multiple of the block size of the used cipher has to be padded in a specific manner
          so the decryptor is able to strip the padding. A commonly used padding scheme is PKCS#7. It fills the remaining bytes
          with the value of the padding length
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify encrypted messages that rely on padding
            </li>
            <li>
              Attempt to break the padding of the encrypted messages and analyze the returned error messages for further
              analysis.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Bletchley, PadBuster, Padding Oracle Exploitation Tool (POET), Poracle, python-paddingoracle.
          <hr/>
        </div>
      </div>
    </div>
  )
}
