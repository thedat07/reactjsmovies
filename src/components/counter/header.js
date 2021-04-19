import React from 'react';
class HeaderCompoent extends React.PureComponent {
    render() {
        console.log('HeaderCompoent is render')
        return (
            <>
                <div style={{ width: '100%', minHeight: '50px', background: '#ccc' }}>
                    <h1>This is Header</h1>
                </div>
            </>
        )
    }
}
export default HeaderCompoent