import InputField from "./InputField/InputField";

function FactsList(props) {
  return (
    <div className="FactsList">
      <InputField onChangeHandler={props.onChangeHandler} maxNumber={props.factsNumber}
        maxNumberOfFacts={props.maxNumberOfFacts} />
      <ul>
        {props.children(props.facts, props.factsNumber)}
      </ul>
    </div>
  );
}

export default FactsList;
