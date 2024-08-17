import cls from './NotFoundInfo.module.scss'

export const NotFoundInfo = () => {
  return (
    <div className={cls.info}>
      <h1>
        <span className={cls.emoji}>😰</span>
        <br />
        404 Not found
      </h1>
      <p className={cls.description}>К сожалению у нас нет такой страницы</p>
    </div>
  )
}
