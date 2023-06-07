export const targetIcon = (target: string) => {

  const baseDir = './img'
  const child = `${baseDir}/target-child.svg`
  const adult = `${baseDir}/target-adult.svg`
  const all = `${baseDir}/target-all.svg`

  const icon = {
    '乳幼児': child,
    '小学生': child,
    '中高生': child,
    '大人': adult,
    'シニア': adult,
    '全員': all,
  }

  // @ts-ignore
  return icon[target]
}