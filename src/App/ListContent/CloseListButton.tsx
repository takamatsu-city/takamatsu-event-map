type Props = {
  closeListHandler: (event: any) => void
}

const Content = (props: Props) => {
  const { closeListHandler } = props;

  return (
    <>
      <label id="list-close" onClick={closeListHandler}><span></span></label>
    </>
  );
}

export default Content;
