import PropTypes from 'prop-types';
import { ContactsName, WrapperFilter, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <WrapperFilter>
            <ContactsName>Contacts</ContactsName>
            <LabelFilter>Find contacts by name
                <InputFilter type = "text" value={value} onChange = {onChange}></InputFilter>
          </LabelFilter>

        </WrapperFilter>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}