import React from 'react';
import cockpit from 'cockpit';

const _ = cockpit.gettext;

const ImageSecurity = (props) => {
    const info = props.info;
    const args = {
        time: info.finishedTime.format('MMM Do'),
        type: info.scanType,
        count: info.vulnerabilities.length
    };

    // TODO: info.successful/vulnerabilities.length
    const text = _("The scan from $time ($type) found no vulnerabilities.");

    const rows = info.vulnerabilities.map(
        function (vulnerability) {
            return (
                <div className="vulnerability-row-ct-docker" title={vulnerability.description} key={vulnerability.title}>
                    <span>{vulnerability.title}</span>
                    <span className="pull-right">{vulnerability.severity}</span>
                </div>
            );
        });

    return (
        <div>
            <div className="listing-ct-body-header">
                { cockpit.format(text, args) }
            </div>
            <div>
                {rows}
            </div>
        </div>

    );
};

export default ImageSecurity;
